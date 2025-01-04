// src/routes/api/stripe/+server.ts

import {
	REVENUECAT_STRIPE_API_KEY,
	STRIPE_SECRET_KEY,
	STRIPE_WEBHOOK_SECRET,
	SUPABASE_SERVICE_ROLE_KEY
} from '$env/static/private';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

import Stripe from 'stripe';

import { error } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.text();
	const signature = request.headers.get('stripe-signature');

	if (!signature) {
		throw error(400, 'Missing Stripe signature');
	}

	try {
		const event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);

		switch (event.type) {
			case 'checkout.session.completed': {
				const session = event.data.object;
				const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

				const interval = lineItems.data[0].price?.recurring?.interval ?? 'lifetime';

				let clientReferenceId = session.client_reference_id;

				if (!clientReferenceId) {
					const customerEmail = session.customer_details?.email;
					if (!customerEmail) {
						throw error(400, 'No client_reference_id or customer email');
					}

					const userId = await findUserByEmail(customerEmail);

					if (!userId) {
						throw error(400, 'No user found');
					}

					clientReferenceId = userId;
				}

				const customerId = session.customer;

				await notifyRevenueCat(session.id, clientReferenceId, {
					stripe_session_id: session.id,
					stripe_customer_id: customerId as string,
					stripe_subscription_interval: interval
				});

				break;
			}
		}

		return new Response(JSON.stringify({ received: true }));
	} catch (err) {
		console.error('Webhook error:', err);
		throw error(400, 'Webhook Error');
	}
};

async function findUserByEmail(email: string): Promise<string | null> {
	const response = await fetch(`${PUBLIC_SUPABASE_URL}/rest/v1/rpc/get_user_id_by_email`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			apikey: SUPABASE_SERVICE_ROLE_KEY,
			Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
		},
		body: JSON.stringify({ user_email: email })
	});

	if (!response.ok) {
		console.error('Failed fetch user by email', response);
		throw new Error('Failed to fetch user by email');
	}

	const data = await response.json();

	return data;
}

async function notifyRevenueCat(
	fetchToken: string,
	appUserId: string,
	attributes: Record<string, string | null>
) {
	// To pass customer attributes, we must adapt them to this form key : { value: value }
	const customerAttributes: Record<string, { value: string }> = {};

	for (const [key, value] of Object.entries(attributes)) {
		if (value) {
			customerAttributes[key] = { value: value };
		}
	}

	const response = await fetch('https://api.revenuecat.com/v1/receipts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Platform': 'stripe',
			Authorization: `Bearer ${REVENUECAT_STRIPE_API_KEY}`
		},
		body: JSON.stringify({
			app_user_id: appUserId,
			fetch_token: fetchToken,
			attributes: customerAttributes
		})
	});

	if (!response.ok) {
		console.error('Failed to notify RevenueCat', response);
		throw new Error('Failed to notify RevenueCat');
	}
}
