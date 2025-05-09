<script lang="ts">
	import FilledButton from '$lib/shared/components/FilledButton.svelte';
	import type { Session } from '@supabase/supabase-js';

	export let session: Session | null;
</script>

<nav class="sticky top-0 z-10 flex h-20 min-w-full justify-between bg-white p-2 md:p-4">
	<a class="flex items-center gap-3" href="/">
		<img alt="logo" class="h-8" src="/icons/zen_iptv.svg" />
		<div class="flex gap-0.5 text-lg font-bold">
			<h6 class="text-primary">ZEN</h6>
			<h6>IPTV</h6>
		</div>
	</a>

	<div class="flex items-center gap-2 md:gap-4">
		<FilledButton href="/help">Support</FilledButton>

		{#if session}
			<FilledButton href="/account" variant="ghost">Mon Compte</FilledButton>
		{:else}
			<FilledButton href="/auth">Connexion</FilledButton>
		{/if}
	</div>
</nav>
