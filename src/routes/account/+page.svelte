<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		PUBLIC_STRIPE_PRICING_TABLE_ID,
		PUBLIC_STRIPE_PUBLISHABLE_KEY
	} from '$env/static/public';
	import SubscriptionInfos from '$lib/features/account/components/SubscriptionInfos.svelte';
	import Chip from '$lib/shared/components/Chip.svelte';
	import FilledButton from '$lib/shared/components/FilledButton.svelte';
	import HorizontalDivider from '$lib/shared/components/HorizontalDivider.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { supabase, user, subscription, error } = data;

	async function handleSignOut() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}
		await goto('/');
	}
</script>

<div class="w-full max-w-3xl mx-auto p-8">
	<!-- User Profile Section -->
	<section class="space-y-4">
		<h4 class="text-2xl font-bold mb-4">Informations</h4>

		<div>
			<p class="text-sm text-gray-500">Email</p>
			<p class="text-lg">{user.email}</p>
		</div>

		<div>
			<p class="text-sm text-gray-500">Date de création</p>
			<p class="text-lg">
				{new Date(user.created_at).toLocaleDateString()}
			</p>
		</div>

		<FilledButton fullWidth variant="ghost" on:click={handleSignOut}>Se déconnecter</FilledButton>
	</section>

	<HorizontalDivider class="my-8" />

	<!-- Subscription Section -->
	<section class="space-y-4">
		<h4 class="text-2xl font-bold mb-4">Abonnement</h4>

		{#if error}
			<div class="text-red-600 p-4 bg-red-50 rounded-lg">
				{error}
			</div>
		{/if}

		{#if subscription}
			<SubscriptionInfos {subscription} />
		{:else}
			<Chip color="amber">
				Black Friday: Utilisez le code BF2024 pour obtenir l'achat à vie à 14.99€
			</Chip>

			<div class="mb-4" />

			<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
			<stripe-pricing-table
				pricing-table-id={PUBLIC_STRIPE_PRICING_TABLE_ID}
				publishable-key={PUBLIC_STRIPE_PUBLISHABLE_KEY}
				client-reference-id={user.id}
			>
			</stripe-pricing-table>
		{/if}
	</section>
</div>
