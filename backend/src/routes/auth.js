const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const admin = require('firebase-admin');

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  try {
    const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  } catch (err) {
    console.warn('Firebase admin init failed (service account not found)');
  }
}

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash, phone, address });
    await user.save();
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password || '');
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Exchange Firebase ID token for backend JWT (Google sign-in flow)
router.post('/firebase', async (req, res) => {
  const { idToken } = req.body;
  if (!admin.apps.length) return res.status(500).json({ message: 'Firebase admin not configured' });
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const { email, name } = decoded;
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, name, role: 'customer' });
      await user.save();
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(400).json({ message: 'Invalid Firebase token' });
  }
});

module.exports = router;
