
<script>
    import { linear } from 'svelte/easing';
    import {blur, fade, fly, scale, slide} from 'svelte/transition';

    import Item from './Item.svelte';

    export let items = [];

    const options = {duration: 1000, easing: linear};
</script>

{#each items as item (item)}
    <div 
        in:fly={{...options, opacity: 1, x: -400}}
        out:fly={{...options, opacity: 1, x: 500}}
    >
        <Item name={item} />
    </div>
{/each}
