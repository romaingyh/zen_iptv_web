// lib/features/account/services/revenueCatSubscriptionMapper.ts

import { PUBLIC_STRIPE_CUSTOMER_PORTAL } from '$env/static/public';
import type {
	RevenuecatCustomerAttributes,
	RevenuecatEntitlement,
	RevenueCatEntitlements,
	RevenueCatSubscriber,
	RevenuecatSubscription
} from '../models/revenuecat_types';
import type { Subscription } from '../models/Subscription';

/*
 * Maps stripe subscription interval to a ios-like product identifier
 */
const PRODUCT_ID_BY_STRIPE_INTERVAL: Record<string, string> = {
	month: 'zen_iptv_access_monthly',
	year: 'zen_iptv_access_yearly',
	lifetime: 'zen_iptv_access_lifetime'
};

/*
 * Maps a ios & android product identifiers to a display name
 */
const DISPLAY_NAMES_BY_PRODUCT_ID: Record<string, string> = {
	zen_iptv_access_monthly: 'Zen Access mensuel',
	access_monthly: 'Zen Access mensuel',
	zen_iptv_access_yearly: 'Zen Access annuel',
	access_yearly: 'Zen Access annuel',
	zen_iptv_access_lifetime: 'Zen Access à vie'
};

export function extractActiveSubscription(subscriber: RevenueCatSubscriber): Subscription | null {
	const entitlement = getActiveEntitlement(subscriber.entitlements);
	if (!entitlement) {
		return null;
	}

	// Non subscription product
	if (!entitlement.expires_date) {
		const product = subscriber.non_subscriptions[entitlement.product_identifier][0];
		if (!product) {
			return null;
		}

		return {
			id: entitlement.product_identifier,
			displayName: getDisplayName(
				entitlement.product_identifier,
				product.store,
				subscriber.subscriber_attributes
			),
			store: product.store,
			managementUrl: null,
			periodType: 'normal',
			purchaseDate: new Date(product.purchase_date),
			expiresDate: null,
			willRenew: true,
			status: 'active'
		};
	}

	// Subscription
	const subscription = subscriber.subscriptions[entitlement.product_identifier];
	if (!subscription) {
		return null;
	}

	let managementUrl = subscriber.management_url;
	if (!managementUrl && subscription.store === 'stripe') {
		managementUrl = PUBLIC_STRIPE_CUSTOMER_PORTAL;
	}

	const displayName = getDisplayName(
		entitlement.product_identifier,
		subscription.store,
		subscriber.subscriber_attributes
	);

	return {
		id: entitlement.product_identifier,
		displayName: displayName,
		store: subscription.store,
		managementUrl: managementUrl,
		periodType: subscription.period_type,
		purchaseDate: new Date(subscription.purchase_date),
		expiresDate: subscription.expires_date ? new Date(subscription.expires_date) : null,
		willRenew: !subscription.unsubscribe_detected_at,
		status: getSubscriptionStatus(subscription)
	};
}

function getActiveEntitlement(entitlements: RevenueCatEntitlements): RevenuecatEntitlement | null {
	const accessEntitlement = entitlements.access;

	if (accessEntitlement) {
		const expiresDate = accessEntitlement.expires_date;

		// Two valid cases: no expiration date (lifetime) or expiration date in the future
		if (!expiresDate || new Date(expiresDate) > new Date()) {
			return accessEntitlement;
		}
	}

	return null;
}

function getSubscriptionStatus(subscription: RevenuecatSubscription): Subscription['status'] {
	if (subscription.expires_date && new Date(subscription.expires_date) < new Date()) {
		return 'expired';
	}

	if (subscription.unsubscribe_detected_at) {
		return 'canceled';
	}

	return 'active';
}

function getDisplayName(
	productId: string,
	store: string,
	attributes: RevenuecatCustomerAttributes
): string {
	if (store === 'stripe') {
		const interval = attributes.stripe_subscription_interval?.value || 'lifetime';
		productId = PRODUCT_ID_BY_STRIPE_INTERVAL[interval] || productId;
	}

	return DISPLAY_NAMES_BY_PRODUCT_ID[productId] || productId;
}
