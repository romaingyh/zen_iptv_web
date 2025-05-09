<script lang="ts">
	export let title: string;
	export let description: string;
	export let reversed: boolean = false;
</script>

<div
	class="flex w-full max-w-[800px] flex-col gap-4 md:gap-12 {reversed
		? 'md:flex-row-reverse'
		: 'md:flex-row'}"
>
	<div class="flex flex-1 flex-col justify-center gap-1 md:gap-6">
		<h2>{title}</h2>
		<p>{description}</p>
	</div>
	<div class="flex flex-1 flex-row justify-center">
		<slot />
	</div>
</div>
