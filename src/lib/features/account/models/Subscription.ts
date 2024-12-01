// RevenueCat Subscription wrapper
export type Subscription = {
	id: string;
	displayName: string;

	store: string;
	managementUrl: string | null;

	periodType: 'normal' | 'trial' | 'intro';

	purchaseDate: Date;
	expiresDate: Date | null;

	willRenew: boolean;
	status: 'active' | 'expired' | 'canceled';
};

/*
d24b1157-2a71-4722-a1fe-bfbe33939fe1 Currently subscribed to monthly

{
  entitlements: {
    access: {
      expires_date: '2024-12-25T09:52:50Z',
      grace_period_expires_date: null,
      product_identifier: 'zen_iptv_access_monthly',
      purchase_date: '2024-11-25T09:52:50Z'
    }
  },
  first_seen: '2024-10-18T08:46:29Z',
  last_seen: '2024-12-01T02:12:30Z',
  management_url: 'https://apps.apple.com/account/subscriptions',
  non_subscriptions: {},
  original_app_user_id: 'd24b1157-2a71-4722-a1fe-bfbe33939fe1',
  original_application_version: '23',
  original_purchase_date: '2024-10-18T08:52:51Z',
  other_purchases: {},
  subscriber_attributes: {
    '$attConsentStatus': { updated_at_ms: 1732518380538, value: 'denied' },
    '$email': { updated_at_ms: 1729241188925, value: 'manudubo@gmail.com' }
  },
  subscriptions: {
    zen_iptv_access_monthly: {
      auto_resume_date: null,
      billing_issues_detected_at: null,
      expires_date: '2024-12-25T09:52:50Z',
      grace_period_expires_date: null,
      is_sandbox: false,
      original_purchase_date: '2024-10-18T08:52:51Z',
      ownership_type: 'PURCHASED',
      period_type: 'normal',
      purchase_date: '2024-11-25T09:52:50Z',
      refunded_at: null,
      store: 'app_store',
      store_transaction_id: '460002192207123',
      unsubscribe_detected_at: null
    }
  }
}




e07a8150-3641-42b0-81e3-ed84a1b21bac yearly trial

{
  entitlements: {
    access: {
      expires_date: '2024-12-08T09:11:46Z',
      grace_period_expires_date: null,
      product_identifier: 'zen_iptv_access_yearly',
      purchase_date: '2024-12-01T09:11:46Z'
    }
  },
  first_seen: '2024-12-01T06:35:50Z',
  last_seen: '2024-12-01T06:35:50Z',
  management_url: 'https://apps.apple.com/account/subscriptions',
  non_subscriptions: {},
  original_app_user_id: 'e07a8150-3641-42b0-81e3-ed84a1b21bac',
  original_application_version: '83',
  original_purchase_date: '2024-12-01T09:11:47Z',
  other_purchases: {},
  subscriber_attributes: {
    '$attConsentStatus': { updated_at_ms: 1733044310922, value: 'denied' },
    '$email': {
      updated_at_ms: 1733040548334,
      value: 'bknxh87mg4@privaterelay.appleid.com'
    }
  },
  subscriptions: {
    zen_iptv_access_yearly: {
      auto_resume_date: null,
      billing_issues_detected_at: null,
      expires_date: '2024-12-08T09:11:46Z',
      grace_period_expires_date: null,
      is_sandbox: false,
      original_purchase_date: '2024-12-01T09:11:47Z',
      ownership_type: 'PURCHASED',
      period_type: 'trial',
      purchase_date: '2024-12-01T09:11:46Z',
      refunded_at: null,
      store: 'app_store',
      store_transaction_id: '550002036183868',
      unsubscribe_detected_at: null
    }
  }
}



68fdcd6e-e654-4f92-ac8b-95c3ae22dde5 monthly trial cancelled
{
  entitlements: { all: { access: [Object] }, active: { access: [Object] } },
  allExpirationDatesByProduct: { access_monthly: 2024-12-03T18:32:54.000Z },
  allPurchaseDatesByProduct: { access_monthly: 2024-11-26T18:34:06.000Z },
  activeSubscriptions: Set(1) { 'access_monthly' },
  managementURL: 'https://play.google.com/store/account/subscriptions',
  requestDate: 2024-11-30T10:32:46.000Z,
  firstSeenDate: 2024-05-09T18:59:19.000Z,
  originalPurchaseDate: null,
  originalAppUserId: '$RCAnonymousID:4b294054dfee4044bbeacd78b846f3f4'
}
{
  access: {
    identifier: 'access',
    isActive: true,
    willRenew: false,
    store: 'play_store',
    latestPurchaseDate: 2024-11-26T18:34:06.000Z,
    originalPurchaseDate: 2024-11-26T18:34:06.000Z,
    expirationDate: 2024-12-03T18:32:54.000Z,
    productIdentifier: 'access_monthly',
    unsubscribeDetectedAt: 2024-11-26T21:19:19.000Z,
    billingIssueDetectedAt: null,
    isSandbox: false,
    periodType: 'trial'
  }
}
Set(1) { 'access_monthly' }



70b4a1e4-9e4f-486d-a717-2bf6f242fafe lifetime
{
  entitlements: {
    access: {
      expires_date: null,
      grace_period_expires_date: null,
      product_identifier: 'zen_iptv_access_lifetime',
      purchase_date: '2024-11-28T18:16:04Z'
    }
  },
  first_seen: '2024-05-30T21:16:48Z',
  last_seen: '2024-12-01T11:47:55Z',
  management_url: null,
  non_subscriptions: { zen_iptv_access_lifetime: [ [Object] ] },
  original_app_user_id: '$RCAnonymousID:d2e86ff2fb3843bd92569e9e4ad515ad',
  original_application_version: '15',
  original_purchase_date: '2024-11-28T18:16:04Z',
  other_purchases: {
    zen_iptv_access_lifetime: { purchase_date: '2024-11-28T18:16:04Z' }
  },
  subscriber_attributes: {
    '$attConsentStatus': { updated_at_ms: 1732817766038, value: 'denied' },
    '$email': {
      updated_at_ms: 1717103847351,
      value: 'tsjts79qbq@privaterelay.appleid.com'
    }
  },
  subscriptions: {}
}
*/
