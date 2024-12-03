// src/routes/account/+page.server.ts

import { fetchRevenueCatSubscriber } from '$lib/features/account/services/revenueCatService';
import { extractActiveSubscription } from '$lib/features/account/utils/revenueCatSubscriptionMapper';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

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
	} catch (error) {
		console.error('Failed to load subscription data', error);
		return {
			user,
			subscription: null,
			error: 'Failed to load subscription data'
		};
	}
};
