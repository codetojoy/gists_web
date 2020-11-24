<script>
  import entries from "../stores/entries.js";
  import config from "../stores/config.js";
  import ControlPanel from "../components/ControlPanel.svelte";
</script>

<section class="controls">
  <ControlPanel
    numToAdd={$config.numToAdd}
    on:addRandom={() => entries.addRandom($config.numToAdd)}
    on:reset={() => entries.reset()}
    on:clearAll={() => entries.clearAll()}
    on:setNumToAdd={(event) => config.setNumToAdd(event.detail.setNumToAdd)}
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