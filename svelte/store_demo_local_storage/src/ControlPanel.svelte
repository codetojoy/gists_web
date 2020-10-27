<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();	

	function addRandomClicked() {
		// console.log(`TRACER addRandom`);
		dispatch("addRandom");
	}
	function resetClicked() {
		// console.log(`TRACER reset`);
		dispatch("reset");
	}
	function clearAllClicked() {
		// console.log(`TRACER clearAll`);
		dispatch("clearAll");
	}
</script>

<div class="control">
	<button on:click={addRandomClicked}>Add Random</button>
	<br/>
	<button on:click={resetClicked}>Reset</button>
	<br/>
	<button on:click={clearAllClicked}>Clear All</button>
</div>

<style>
	.control {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>