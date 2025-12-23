import { NextRequest, NextResponse } from 'next/server';
import { getStripe, PRICE_IDS, PriceId } from '@/lib/stripe';

interface CheckoutRequestBody {
  priceIds: PriceId[];
  mode: 'subscription' | 'payment';
  successUrl?: string;
  cancelUrl?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequestBody = await request.json();
    const { priceIds, mode, successUrl, cancelUrl } = body;

    if (!priceIds || priceIds.length === 0) {
      return NextResponse.json(
        { error: 'At least one price ID is required' },
        { status: 400 }
      );
    }

    // Validate that all price IDs are valid
    const validPriceIds = Object.values(PRICE_IDS);
    for (const priceId of priceIds) {
      if (!validPriceIds.includes(priceId)) {
        return NextResponse.json(
          { error: `Invalid price ID: ${priceId}` },
          { status: 400 }
        );
      }
    }

    const origin = request.headers.get('origin') || 'http://localhost:3000';
    const defaultSuccessUrl = `${origin}/success?session_id={CHECKOUT_SESSION_ID}`;
    const defaultCancelUrl = `${origin}/#pricing`;

    // Build line items
    const line_items = priceIds.map((priceId) => ({
      price: priceId,
      quantity: 1,
    }));

    const session = await getStripe().checkout.sessions.create({
      mode,
      line_items,
      success_url: successUrl || defaultSuccessUrl,
      cancel_url: cancelUrl || defaultCancelUrl,
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
