<script lang="ts">
    export let id: string;
</script>

<div class="min-w-full flex flex-col items-center gap-8 p-8 md:gap-12 md:p-12 lg:px-36 lg:py-20" {id}>
    <slot/>
</div>