<script lang="ts">
    export let title: string;
    export let description: string;
    export let reversed: boolean = false;
</script>

<div class="max-w-[800px] w-full flex gap-4 flex-col md:gap-12 {reversed ? 'md:flex-row-reverse' : 'md:flex-row'}">
    <div class="flex-1 flex flex-col justify-center gap-1 md:gap-6">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    <div class="flex-1 flex flex-row justify-center">
        <slot/>
    </div>
</div>