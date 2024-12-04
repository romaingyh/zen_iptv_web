<script lang="ts">
	export let color: 'green' | 'red' | 'amber';

	const colors = {
		green: 'bg-green-100 text-green-800',
		red: 'bg-red-100 text-red-800',
		amber: 'bg-amber-100 text-amber-800'
	};

	const colorClass = colors[color];
</script>

<span class="px-2 py-1 rounded-full text-sm {colorClass}">
	<slot />
</span>
