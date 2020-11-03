<script>
  export let radius = 1;
  $: area = 2 * Math.PI * radius**2;
  $: console.log(`TRACER change detected! radius: ${radius}`);
</script>

<main>
  <label>
    Circle Radius:
    <input type="number" bind:value={radius}>
  </label>
  <label>
    Circle Area: {area}
  </label>
</main>
