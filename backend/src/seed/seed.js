const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/Product');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

connectDB();

async function seed() {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});

    const admin = new User({
      name: 'Admin',
      email: 'admin@sravya.com',
      password: bcrypt.hashSync('admin123', 10),
      role: 'admin',
      phone: '9999999999',
      address: 'Head Office'
    });
    await admin.save();

    const products = [
      {
        name: 'HP LaserJet Pro M15w',
        brand: 'HP',
        category: 'Printers',
        pricePerDay: 200,
        pricePerWeek: 1100,
        pricePerMonth: 3800,
        images: [],
        description: 'Compact monochrome laser printer',
        isAvailable: true,
        stock: 5
      },
      {
        name: 'JBL Flip 5',
        brand: 'JBL',
        category: 'Speakers',
        pricePerDay: 150,
        pricePerWeek: 800,
        pricePerMonth: 2500,
        images: [],
        description: 'Portable Bluetooth speaker',
        isAvailable: true,
        stock: 8
      }
    ];

    await Product.insertMany(products);
    console.log('Seed complete');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
