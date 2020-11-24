<script>
  import entries from "../stores/entries.js";
	import ControlPanel from "../components/ControlPanel.svelte";
</script>

<section class="controls">
  <ControlPanel
    on:addRandom={() => entries.addRandom()}
    on:reset={() => entries.reset()}
    on:clearAll={() => entries.clearAll()}
  />
</section>

<style>
	.controls {
		flex-grow: 0;
		flex-shrink: 0;
		flex-direction: column;
		width: 20%;
	}
</style>