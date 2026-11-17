const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  stripePaymentIntentId: { type: String },
  amount: { type: Number },
  currency: { type: String, default: 'inr' },
  status: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
