const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Product = require('../models/Product');
const { auth } = require('../middleware/auth');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');

function daysBetween(a, b) {
  const diff = Math.ceil((new Date(b) - new Date(a)) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 1;
}

// Create booking and return Stripe Checkout URL
router.post('/', auth, async (req, res) => {
  try {
    const { productId, startDate, endDate, qty = 1 } = req.body;
    const product = await Product.findById(productId);
    if (!product || !product.isAvailable) return res.status(400).json({ message: 'Product not available' });
    if (qty > product.stock) return res.status(400).json({ message: 'Insufficient stock' });

    const days = daysBetween(startDate, endDate);
    const totalPrice = days * (product.pricePerDay || 0) * qty;

    const booking = new Booking({
      user: req.user._id,
      product: product._id,
      startDate,
      endDate,
      qty,
      totalPrice,
      status: 'pending',
      paymentStatus: 'pending'
    });
    await booking.save();

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: { name: product.name },
          unit_amount: Math.round(totalPrice * 100)
        },
        quantity: 1
      }],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/products/${product._id}`,
      metadata: { bookingId: booking._id.toString() }
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
