# Backend — Sravya Tech Rentals

Express + MongoDB API for products, bookings, auth, and payments.

Key routes
- `POST /api/auth/register` — email signup
- `POST /api/auth/login` — email login
- `POST /api/auth/firebase` — exchange Firebase ID token for JWT
- `GET /api/products` — list products
- `POST /api/bookings` — create booking + Stripe Checkout session
- `POST /api/payments/webhook` — Stripe webhook (checkout.session.completed)

Scripts
- `npm run dev` — start server with nodemon
- `npm run seed` — seed sample products and an admin user

Environment variables: see `.env.example`.
