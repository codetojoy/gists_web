<script>
  import {flip} from 'svelte/animate';
 
  let horizontal = false;
  let next = 1;
  let list = [];
 
  function addItem() {
    list = [next++, ...list];                                      
  }
 
  function removeItem(number) {
    list = list.filter(n => n !== number);
  }
 
  const options = {duration: 500};
</script>
 
<label>
  Horizontal
  <input type="checkbox" bind:checked={horizontal}>
</label>
 
<button on:click={addItem}>Add</button>
 
{#each list as n (n)}                                               
  <div animate:flip={options} class="container" class:horizontal>   
    <button on:click={() => removeItem(n)}>{n}</button>
  </div>
{/each}
 
<style>
  .container {
    width: fit-content;                                             
  }
 
  .horizontal {
    display: inline-block;
    margin-left: 10px;
  }
</style>
