const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  category: { type: String },
  pricePerDay: { type: Number, required: true, default: 0 },
  pricePerWeek: { type: Number, default: 0 },
  pricePerMonth: { type: Number, default: 0 },
  images: [{ type: String }],
  description: { type: String },
  isAvailable: { type: Boolean, default: true },
  stock: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
