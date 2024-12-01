// lib/features/account/services/revenueCatService.ts
import { REVENUECAT_SECRET_API_KEY } from '$env/static/private';
import type { RevenueCatCustomerResponse as RevenueCatSubscriberResponse } from '../models/revenuecat_types';

export async function fetchRevenueCatSubscriber(
	userId: string
): Promise<RevenueCatSubscriberResponse> {
	const response = await fetch(`https://api.revenuecat.com/v1/subscribers/${userId}`, {
		headers: {
			Authorization: `Bearer ${REVENUECAT_SECRET_API_KEY}`
		}
	});

	if (!response.ok) {
		throw new Error('Failed to fetch RevenueCat customer');
	}

	return response.json();
}
