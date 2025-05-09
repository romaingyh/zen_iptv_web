<script lang="ts">
	export let src: string;
	export let text: string;
</script>

<div class="flex gap-3">
	<img alt={text} class="h-9 w-9" {src} />
	<h4 class="text-gray-400">{text}</h4>
</div>
