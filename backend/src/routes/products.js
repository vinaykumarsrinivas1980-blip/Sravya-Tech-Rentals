const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', async (req, res) => {
  const products = await Product.find({}).lean();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  } catch (err) {
    res.status(400).json({ message: 'Invalid id' });
  }
});

router.post('/', auth, adminOnly, async (req, res) => {
  const data = req.body;
  const p = new Product(data);
  await p.save();
  res.json(p);
});

router.put('/:id', auth, adminOnly, async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(p);
});

router.delete('/:id', auth, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
