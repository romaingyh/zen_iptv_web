<script lang="ts">
    export let href: string | undefined = undefined;
    export let target: string = "_self";
</script>

{#if href }
    <a {href}
       {target}
       class='flex-1 text-center py-2 px-4 w-fit bg-primary rounded-lg shadow-lg hover:shadow-xl text-white font-bold transition-all duration-200 ease-in-out'
       on:focus
       on:mouseenter
       on:mouseleave
       on:mouseover>
        <slot/>
    </a>
{:else}
    <button
            class='text-center py-2 px-4 w-fit bg-primary rounded-lg shadow-lg hover:shadow-xl text-white font-bold transition-all duration-200 ease-in-out'
            on:click
            on:focus
            on:mouseenter
            on:mouseleave
            on:mouseover>
        <slot/>
    </button>
{/if}

