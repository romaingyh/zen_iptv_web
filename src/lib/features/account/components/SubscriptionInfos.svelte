<script lang="ts">
	import Chip from '$lib/shared/components/Chip.svelte';
	import FilledButton from '$lib/shared/components/FilledButton.svelte';
	import type { Subscription } from '../models/Subscription';

	export let subscription: Subscription;
</script>

<div class="space-y-4">
	<div>
		<p class="text-sm text-gray-500">Plan</p>
		<p class="text-lg">{subscription.displayName}</p>
		{#if subscription.periodType === 'trial'}
			<Chip color="amber">Essai gratuit</Chip>
		{/if}
	</div>

	<div>
		<p class="text-sm text-gray-500">Status</p>
		<Chip color={subscription.status === 'active' ? 'green' : 'red'}>
			{subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
		</Chip>
	</div>

	<div>
		<p class="text-sm text-gray-500">Acheté le</p>
		<p class="text-lg">
			{subscription.purchaseDate.toLocaleDateString()}
		</p>
	</div>

	{#if subscription.expiresDate}
		<div>
			{#if subscription.willRenew}
				<p class="text-sm text-gray-500">Renouvelement automatique le</p>
			{:else}
				<p class="text-sm text-gray-500">Expiration le</p>
			{/if}
			<p class="text-lg">
				{subscription.expiresDate?.toLocaleDateString()}
			</p>
		</div>
	{/if}

	{#if subscription.managementUrl}
		<FilledButton fullWidth variant="ghost" href={subscription.managementUrl}>
			Gérer sur {subscription.store}
		</FilledButton>
	{/if}
</div>
