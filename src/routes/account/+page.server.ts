// src/routes/account/+page.server.ts

import { STRIPE_SECRET_KEY } from '$env/static/private';
import { PUBLIC_STRIPE_CUSTOMER_PORTAL } from '$env/static/public';
import { fetchRevenueCatSubscriber } from '$lib/features/account/services/revenueCatService';
import { extractActiveSubscription } from '$lib/features/account/utils/revenueCatSubscriptionMapper';
import { error, isRedirect, redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import type { Actions, PageServerLoad } from './$types';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {
	const { session, user } = await safeGetSession();

	if (!session || !user) {
		throw redirect(303, '/auth');
	}

	try {
		const userId = user.id;

		const subscriberResponse = await fetchRevenueCatSubscriber(userId);
		const subscription = extractActiveSubscription(subscriberResponse.subscriber);

		return {
			user,
			subscription
		};
	} catch (err) {
		console.error('Failed to load subscription data', err);
		return {
			user,
			subscription: null,
			error: 'Failed to load subscription data'
		};
	}
};

export const actions: Actions = {
	manageSubscription: async ({ locals: { safeGetSession }, url }) => {
		const { session, user } = await safeGetSession();

		if (!session || !user) {
			throw error(401, 'Unauthorized');
		}

		try {
			const subscriberResponse = await fetchRevenueCatSubscriber(user.id);
			const customerId = subscriberResponse.subscriber.subscriber_attributes?.stripe_customer_id?.value;

			if (!customerId) {
				console.warn('Stripe customer ID not found, falling back to static portal');
				throw redirect(303, PUBLIC_STRIPE_CUSTOMER_PORTAL);
			}

			const portalSession = await stripe.billingPortal.sessions.create({
				customer: customerId,
				return_url: `${url.origin}/account`
			});

			throw redirect(303, portalSession.url);
		} catch (err) {
			if (isRedirect(err)) {
				throw err;
			}
			console.error('Failed to handle subscription management', err);
			throw error(500, 'Failed to handle subscription management');
		}
	}
};
