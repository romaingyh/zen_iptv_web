// lib/features/account/models/revenuecat_types.ts

export type Store =
	| 'app_store'
	| 'mac_app_store'
	| 'play_store'
	| 'amazon'
	| 'stripe'
	| 'promotional';

export type OwnershipType = 'PURCHASED' | 'FAMILY_SHARED';

export type PeriodType = 'normal' | 'trial' | 'intro';

export interface RevenueCatCustomerResponse {
	request_date: string;
	request_date_ms: number;
	subscriber: RevenueCatSubscriber;
}

export interface RevenueCatSubscriber {
	entitlements: RevenueCatEntitlements;
	first_seen: string;
	last_seen: string;
	management_url: string | null;
	non_subscriptions: Record<string, RevenueCatNonSubscriptionProduct[]>;
	original_app_user_id: string;
	original_application_version: string | null;
	original_purchase_date: string | null;
	subscriber_attributes: RevenuecatCustomerAttributes;
	subscriptions: Record<string, RevenuecatSubscription>;
}

export interface RevenueCatEntitlements {
	[key: string]: RevenuecatEntitlement;
}

export interface RevenuecatEntitlement {
	expires_date: string | null;
	grace_period_expires_date: string | null;
	product_identifier: string;
	purchase_date: string;
}

export interface RevenueCatNonSubscriptionProduct {
	id: string;
	is_sandbox: boolean;
	purchase_date: string;
	store: Store;
}

export interface RevenuecatSubscription {
	auto_resume_date: string | null;
	billing_issues_detected_at: string | null;
	expires_date: string | null;
	grace_period_expires_date: string | null;
	is_sandbox: boolean;
	original_purchase_date: string;
	ownership_type: OwnershipType;
	period_type: PeriodType;
	purchase_date: string;
	refunded_at: string | null;
	store: Store;
	unsubscribe_detected_at: string | null;
}

export interface RevenuecatCustomerAttributes {
	[key: string]: RevenuecatAttribute;
}

export interface RevenuecatAttribute {
	updated_at_ms: number;
	value: string;
}
