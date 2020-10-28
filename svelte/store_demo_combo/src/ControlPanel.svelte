<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();	

	function addRandomClicked() {
		dispatch("addRandom");
	}
	function clearTempClicked() {
		dispatch("clearTemp");
	}
</script>

<div class="control">
	<button on:click={addRandomClicked}>Add Random</button>
	<br/>
	<button on:click={clearTempClicked}>Clear Temp</button>
</div>

<style>
	.control {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>