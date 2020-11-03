<script>
  import {tweened} from 'svelte/motion';
  import Pie from './Pie.svelte';
 
  let percent = 0;
  const store = tweened(0, {duration: 1000});
  // const store = spring(0, {stiffness: 0.3, damping: 0.3});
  $: store.set(percent || 0);                  
</script>
 
<label>
  Percent
  <input type="number" min="0" max="100" bind:value={percent}>
</label>
<Pie size={200} percent={$store} />
