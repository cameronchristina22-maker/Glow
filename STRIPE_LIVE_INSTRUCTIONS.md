# Glow & Green: Connecting Stripe (Live Mode Instructions)

This document provides step-by-step instructions for the business owner to transition the **Glow & Green** e-commerce storefront from simulated payment processing to actual, secure **Stripe Live payments**.

The dependencies (`@stripe/stripe-js` and `@stripe/react-stripe-js`) are already pre-installed in `package.json` and available in the codebase.

---

## Step 1: Create a Stripe Account and Retrieve API Keys
1. Go to the [Stripe Dashboard](https://dashboard.stripe.com/) and register or log into your account.
2. Under the **Developers > API Keys** section, locate:
   - **Publishable Key**: Starts with `pk_test_` (for sandbox/testing) or `pk_live_` (for production).
   - **Secret Key**: Starts with `sk_test_` (testing) or `sk_live_` (production).

---

## Step 2: Set Up Environmental Variables
In your production environment or hosting provider (e.g., Vercel, Netlify, AWS, or local Node.js process), define the following environment variable:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```
*(When ready for live sales, swap this out for your live key `pk_live_...`).*

---

## Step 3: Wrap the App (or Checkout Component) with Stripe's `Elements` Provider
To render Stripe’s secure Credit Card forms and encrypt details, you must initialize Stripe with your Publishable Key and wrap the Checkout workflow.

Create a file named `src/components/StripePaymentWrapper.tsx` (or wrap inside `App.tsx` / `Cart.tsx`):

```tsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Load Stripe once outside the component render to avoid re-initialization
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface StripeWrapperProps {
  children: React.ReactNode;
}

export const StripePaymentWrapper: React.FC<StripeWrapperProps> = ({ children }) => {
  // Pass an empty initial appearance or style config to match Glow & Green premium theme
  const options = {
    appearance: {
      theme: 'flat' as const,
      variables: {
        colorPrimary: '#2D6A4F', // Forest Green
        colorBackground: '#FAF9F6', // Soft White
        colorText: '#2B2D2E', // Charcoal
        fontFamily: 'Inter, sans-serif',
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};
```

---

## Step 4: Integrate the Backend Payment Intent endpoint
Stripe requires a secure server-side endpoint to generate a **Payment Intent** (so your customer's credentials and purchase amounts are verified securely and never tampered with).

Your backend server (Node.js, serverless functions, or Express) simply needs a route like `/api/create-payment-intent`:

```javascript
// Server-side Route (Node.js/Express)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body; // e.g. amount in cents (USD $50.00 is 5000 cents)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // convert dollars to cents
      currency: currency || 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

## Step 5: Replace the Simulator inside `src/pages/Cart.tsx`
Currently, the payment in `Cart.tsx` uses standard HTML form inputs and simulates processing with a 2.5-second `setTimeout`.

To link this to Stripe:
1. Wrap the Checkout form with the `<StripePaymentWrapper>` component.
2. Import the React hooks `useStripe`, `useElements`, and use the `<CardElement />` or `<PaymentElement />` in place of the raw HTML inputs for `cardNumber`, `cardExpiry`, and `cardCvv`.
3. Update the checkout submission handler `handleCheckoutSubmit` as follows:

```tsx
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

// Inside Cart/Checkout Component:
const stripe = useStripe();
const elements = useElements();

const handleCheckoutSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!stripe || !elements) {
    // Stripe.js has not yet loaded.
    return;
  }

  setIsSubmitting(true);

  // 1. Create PaymentIntent on backend server
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: totalCost, currency: 'usd' }),
  });
  const { clientSecret } = await response.json();

  // 2. Confirm payment on the client side using Stripe.js
  const result = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/cart?status=success`,
      payment_method_data: {
        billing_details: {
          name: name,
          email: email,
          address: {
            line1: address,
            city: city,
            postal_code: zip,
          }
        }
      }
    },
    // Avoid immediate redirect so we can update our local app success flow state
    redirect: 'if_required', 
  });

  setIsSubmitting(false);

  if (result.error) {
    alert(`Payment failed: ${result.error.message}`);
  } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
    // Success flow!
    setOrderId(result.paymentIntent.id);
    setCheckoutStep('success');
    clearCart();
  }
};
```

Following these steps will enable real-time, SSL-secured credit card checkout and subscription billing on port 3000!
