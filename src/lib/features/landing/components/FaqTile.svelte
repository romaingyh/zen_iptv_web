<script lang="ts">
	import { slide } from 'svelte/transition';

	export let isOpen: boolean = false;

	function toggle() {
		isOpen = !isOpen;
	}

	export let title: string = 'Hello World';
	export let content: string =
		'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate?';

	const arr = content.split(/\n|\r\n/g).map((v, _) => {
		return { text: v, br: '<br>' };
	});
</script>

<div class="accordion min-w-full">
	<button class="flex w-full cursor-pointer gap-2 py-5 md:gap-6" on:click={toggle}>
		<span class="icon {isOpen ? 'rotate-45' : ''} transition-all duration-400 ease-in-out">
			<svg
				class="h-6 w-6 opacity-30"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
			</svg>
		</span>
		<span class="text-start text-base font-semibold md:text-lg">
			{title}
		</span>
	</button>

	{#if isOpen}
		<div class="pr-5 pb-5 pl-12" transition:slide>
			{#each arr as { text, br }}
				{text}
				{@html br}
			{/each}
		</div>
	{/if}
</div>
