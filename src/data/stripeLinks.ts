/**
 * Stripe Payment Links for Glow & Green products.
 * Each link goes directly to a Stripe-hosted checkout page — no backend needed.
 */
export const STRIPE_LINKS: Record<string, string> = {
  "verdant-dew-gentle-cleanser": "https://buy.stripe.com/5kQcN5f1zeTT3Jqa2XfUQ0b",
  "emerald-mist-balancing-toner": "https://buy.stripe.com/8x2fZh7z73bb3Jq6QLfUQ0c",
  "phyto-glow-regenerative-serum": "https://buy.stripe.com/aFa4gzbPnbHH2Fm0snfUQ0d",
  "luminous-leaf-whipped-moisturizer": "https://buy.stripe.com/cNi28r1aJbHHbbS3EzfUQ0e",
  "aura-bloom-face-oil": "https://buy.stripe.com/4gM9ATdXv9zzbbScb5fUQ0f",
};

/** Stripe Payment Link for the Full Ritual Set (5-piece bundle, $170) */
export const FULL_RITUAL_SET_LINK = "https://buy.stripe.com/4gM6oHaLj1333Jq3EzfUQ0g";
