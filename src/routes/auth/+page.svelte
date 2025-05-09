<!-- src/routes/auth/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import FilledButton from '$lib/shared/components/FilledButton.svelte';
	import type { ActionData, SubmitFunction } from './$types';

	export let data;
	export let form: ActionData;

	const { supabase } = data;
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			await update();
			loading = false;
		};
	};

	async function handleSocialLogin(provider: 'google' | 'apple') {
		const { error } = await supabase.auth.signInWithOAuth({
			provider,
			options: {
				redirectTo: `${data.url}/auth/callback`
			}
		});

		if (error) {
			// Handle error (could add to a reactive error store)
			console.error(error);
		}
	}
</script>

<div class="flex min-h-[calc(100vh-5rem)] items-center justify-center p-8">
	<div class="w-full max-w-md space-y-8">
		<div>
			<h2 class="text-3xl font-bold">Connexion Zen IPTV</h2>
			<p class="mt-2 text-gray-600">
				Si vous n'avez pas de compte Zen IPTV utilisez l'application pour commencer.
			</p>
		</div>

		{#if form?.error}
			<div class="rounded-lg bg-red-50 p-4 text-center text-red-600">
				{form.error}
			</div>
		{/if}

		<form method="POST" action="?/login" use:enhance={handleSubmit} class="space-y-4">
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700"> Adresse email </label>

				<input
					id="email"
					name="email"
					type="email"
					value={form?.email ?? ''}
					required
					class="focus:border-primary focus:ring-primary mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs focus:ring-1 focus:outline-hidden"
				/>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-gray-700"> Mot de passe </label>

				<input
					id="password"
					name="password"
					type="password"
					required
					class="focus:border-primary focus:ring-primary mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs focus:ring-1 focus:outline-hidden"
				/>
			</div>

			<FilledButton type="submit" disabled={loading} fullWidth>
				{loading ? 'Connexion en cours...' : 'Se connecter avec ces identifiants'}
			</FilledButton>
		</form>

		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<div class="w-full border-t border-gray-300"></div>
			</div>
			<div class="relative flex justify-center text-sm">
				<span class="bg-white px-4 text-gray-500">Or continue with</span>
			</div>
		</div>

		<div class="space-y-4">
			<button
				type="button"
				on:click|preventDefault={() => handleSocialLogin('google')}
				class="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50"
			>
				<img src="/icons/google.svg" alt="Google" class="h-5 w-5" />
				Sign in with Google
			</button>

			<button
				type="button"
				on:click={() => handleSocialLogin('apple')}
				class="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50"
			>
				<img src="/icons/apple.svg" alt="Apple" class="h-5 w-5" />
				Sign in with Apple
			</button>
		</div>
	</div>
</div>
