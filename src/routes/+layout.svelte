<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';

	import { invalidate } from '$app/navigation';
	import '$lib/i18n/i18n';
	import Navbar from '$lib/shared/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	// Set the locale based on data from +layout.ts
	$: if (data?.locale) {
		locale.set(data.locale);
	}

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				console.log('Invalidating supabase:auth');
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Zen IPTV</title>
</svelte:head>

<Navbar {session} />

<slot />

<footer class="border-t border-gray-200 p-2 text-gray-600 md:p-4">
	<div class="container mx-auto flex justify-center space-x-4">
		<a href="https://zeniptv.app/privacy_policy.html" class="hover:underline">Privacy Policy</a>
		<a href="https://zeniptv.app/cgu.html" class="hover:underline">Terms and Conditions</a>
	</div>
</footer>
