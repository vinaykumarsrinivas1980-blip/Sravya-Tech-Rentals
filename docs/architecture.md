# Architecture Overview

- Frontend: Next.js provides server-side rendering for SEO and fast initial load. Connects to backend API for data and authentication.
- Backend: Express API handles business logic, authentication, bookings and payments. MongoDB stores users, products, bookings and payments.
- Authentication: Email/password with JWT for API access; Google Sign-In via Firebase (frontend obtains ID token, backend verifies via Firebase Admin and issues its own JWT).
- Payments: Stripe Checkout for secure payments; webhook updates booking/payment status and inventory.

Key flows
- Booking: User selects product and dates → frontend posts booking → backend creates booking and Stripe Checkout session → user completes payment → Stripe webhook marks booking as paid and reduces stock.
