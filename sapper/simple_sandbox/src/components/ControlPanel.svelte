<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let numToAdd = 1;

	const addRandomClicked = () => dispatch("addRandom");
	const resetClicked = () => dispatch("reset");
	const clearAllClicked = () => dispatch("clearAll");
	const changeNumToAddQuantity = function(event) {
		const newValue = Number(event.target.value);
		dispatch("setNumToAdd", { setNumToAdd: newValue });
	};
</script>

<div class="control">
	<button on:click={addRandomClicked}>Add Random</button>
	<br/>
	<button on:click={resetClicked}>Reset</button>
	<br/>
	<button on:click={clearAllClicked}>Clear All</button>
	<br/>
	<h3>numToAdd: {numToAdd}</h3>
	<br/>
	<label for="num-to-add"># items to generate:</label>
	<input name="num-to-add" type="number" min="1" value="{numToAdd}" on:input={e => changeNumToAddQuantity(e)} />
</div>

<style>
	.control {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>