<script>
	import entries from "../stores/entries";
  import Items from "../components/Items.svelte";

	const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
</script>

<svelte:head>
  <title>Sapper sandbox</title>
</svelte:head>

<div class="outer">
  <section>
    <h3>TRACER ({now})</h3>
    <Items items={$entries}>
    </Items>
  </section>
</div>

<style>
	.outer {
		display: flex;
		flex-direction: row;
  }

	h3 {
		color: #ff3e00;
	}
</style>
