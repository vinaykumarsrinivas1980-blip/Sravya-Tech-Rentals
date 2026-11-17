const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
connectDB();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const bookingRoutes = require('./routes/bookings');
const payments = require('./routes/payments');

const app = express();

// Stripe webhook needs raw body; mount webhook before json body-parser
app.post('/api/payments/webhook', require('express').raw({ type: 'application/json' }), payments.webhookHandler);

app.use(cors());
app.use(express.json());

// Health check endpoint for uptime monitors & free tier keep-alive
app.get('/health', (req, res) => res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() }));
app.get('/', (req, res) => res.status(200).send('Sravya Tech Rentals API is online'));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', payments.router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
