const express = require('express');
const router = express.Router();
const stripeLib = require('stripe');
const Booking = require('../models/Booking');
const Product = require('../models/Product');
const Payment = require('../models/Payment');

const stripe = stripeLib(process.env.STRIPE_SECRET_KEY || '');

// webhook handler (exported to be mounted with raw body)
const webhookHandler = async (req, res) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;
  try {
    if (endpointSecret) {
      const sig = req.headers['stripe-signature'];
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } else {
      event = req.body;
    }
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata && session.metadata.bookingId;
    try {
      if (bookingId) {
        const booking = await Booking.findById(bookingId);
        if (booking) {
          booking.paymentStatus = 'paid';
          booking.status = 'confirmed';
          await booking.save();

          // reduce product stock
          await Product.findByIdAndUpdate(booking.product, { $inc: { stock: -booking.qty } });

          await Payment.create({ booking: booking._id, stripePaymentIntentId: session.payment_intent || session.payment_intent, amount: booking.totalPrice, status: 'paid' });
        }
      }
    } catch (err) {
      console.error('Failed to update booking after webhook', err);
    }
  }

  res.json({ received: true });
};

module.exports = { router, webhookHandler };
