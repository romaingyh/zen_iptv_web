<!-- src/lib/components/FilledButton.svelte -->
<script lang="ts">
	// For link variant
	export let href: string | undefined = undefined;
	export let target: string = '_self';

	// For button variant
	export let variant: 'filled' | 'outline' | 'ghost' = 'filled';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;

	// Optional props for both
	export let fullWidth: boolean = false;

	// Common styles for all variants
	const baseStyles =
		'text-center py-2 px-4 rounded-lg font-bold transition-all duration-200 ease-in-out';

	// Specific styles for each variant
	const variants = {
		filled: 'bg-primary text-white shadow-lg hover:shadow-xl',
		outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
		ghost: 'text-primary hover:bg-primary hover:bg-opacity-10'
	};

	const disabledStyles = 'opacity-50 cursor-not-allowed';
	const widthStyles = fullWidth ? 'w-full' : 'w-fit';
	$: className = `${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ''} ${widthStyles}`;
</script>

{#if href}
	<a
		{href}
		{target}
		class="{className} inline-block"
		on:click
		on:focus
		on:mouseenter
		on:mouseleave
		on:mouseover
		{...$$restProps}
	>
		<slot />
	</a>
{:else}
	<button
		{type}
		{disabled}
		class={className}
		on:click
		on:focus
		on:mouseenter
		on:mouseleave
		on:mouseover
		{...$$restProps}
	>
		<slot />
	</button>
{/if}
