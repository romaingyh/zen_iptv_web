<script lang="ts">
	import FilledButton from '$lib/shared/components/FilledButton.svelte';
	import type { Session } from '@supabase/supabase-js';

	export let session: Session | null;
</script>

<nav class="min-w-full h-20 bg-white sticky top-0 p-2 md:p-4 flex justify-between z-10">
	<a class="flex items-center gap-3" href="/">
		<img alt="logo" class="h-8" src="/icons/zen_iptv.svg" />
		<div class="font-bold text-lg flex gap-0.5">
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
