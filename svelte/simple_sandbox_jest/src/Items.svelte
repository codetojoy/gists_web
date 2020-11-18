
<script>
    import Item from './Item.svelte';
    export let items = [];
</script>

{#each items as item}
    <Item name={item} />
{/each}