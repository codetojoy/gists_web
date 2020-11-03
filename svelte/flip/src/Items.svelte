
<script>
    import { flip } from 'svelte/animate';
    import { linear } from 'svelte/easing';

    import Item from './Item.svelte';

    export let items = [];

    const options = {duration: 1000, easing: linear};
</script>

{#each items as item (item)}
    <div animate:flip={options}>
        <Item name={item} />
    </div>
{/each}
