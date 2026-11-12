# Deployment Notes

Frontend (Vercel)
- Push `frontend/` to a Git repo and connect to Vercel.
- Set environment variables from `frontend/.env.example`.
- Build command: `npm run build`; Output directory: automatic.

Backend (Render or Heroku)
- Deploy the `backend/` folder as a Node service.
- Environment variables: `MONGODB_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `FIREBASE_SERVICE_ACCOUNT` (store JSON securely), `FRONTEND_URL`.
- Set the Stripe webhook endpoint to `https://<your-backend>/api/payments/webhook` and configure the webhook secret on the backend.

Notes
- Use MongoDB Atlas for production DB.
- Keep `serviceAccountKey.json` out of source control — store in secret manager and mount on the server.
