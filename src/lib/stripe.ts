// Price IDs for each tier (safe to use on client side)
export const PRICE_IDS = {
  // Monthly subscriptions
  starterSpark: 'price_1ShZHTJCKjRAUGXJF0MrBdYh',
  growthPro: 'price_1ShZHlJCKjRAUGXJlqdCmjp3',
  studioPremier: 'price_1ShZIRJCKjRAUGXJdcdOeBm8',
  // One-time payments
  strategySession: 'price_1ShZIoJCKjRAUGXJndFJLA5P',
  studioRental: 'price_1ShZJGJCKjRAUGXJVFvpjZPL',
  guestAppearance: 'price_1ShZZbJCKjRAUGXJNRxkF9Op',
} as const;

export type PriceId = typeof PRICE_IDS[keyof typeof PRICE_IDS];

// Server-side only: Stripe client (lazy initialization)
let stripeInstance: import('stripe').default | null = null;

export function getStripe(): import('stripe').default {
  if (typeof window !== 'undefined') {
    throw new Error('getStripe() should only be called on the server side');
  }

  if (!stripeInstance) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Stripe = require('stripe').default;
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
    }

    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      typescript: true,
    });
  }

  return stripeInstance!;
}

