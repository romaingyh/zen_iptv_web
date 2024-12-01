<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';

	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from '$lib/shared/components/Navbar.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

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