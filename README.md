# Glow & Green Storefront

Glow & Green offers a curated selection of premium, 100% natural, and eco-friendly skincare products. This repository contains the frontend implementation for the Glow & Green e-commerce storefront.

## Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM
- **State Management:** React Context API (Cart & Subscriptions)
- **Payments:** Stripe integration (ready for live mode)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd glow-and-green
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

To enable Stripe payment processing, you need to configure the following environment variables in your hosting environment (e.g., Vercel, Netlify) or a local `.env` file:

| Variable | Description |
| --- | --- |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Your Stripe Publishable Key (`pk_test_...` or `pk_live_...`). |
| `STRIPE_SECRET_KEY` | (Backend) Your Stripe Secret Key (`sk_test_...` or `sk_live_...`). |

Refer to `STRIPE_LIVE_INSTRUCTIONS.md` for detailed steps on how to transition from simulated checkout to live Stripe payments.

## Deployment

The project is configured to bind to `0.0.0.0:3000` for public accessibility.

To build the project for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

- `src/components`: Reusable UI components (Navbar, Footer).
- `src/pages`: Main application pages (Home, Shop, ProductDetails, Cart, AboutUs, Sustainability).
- `src/context`: Global state management (CartContext).
- `src/data`: Product catalog and static data.
- `public`: Static assets (Logo, Banners).

## License

All rights reserved. Glow & Green 2026.
