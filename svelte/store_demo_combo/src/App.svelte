<script>
	import entries from "./stores/entries";
	import ControlPanel from "./ControlPanel.svelte";
	import Items from "./Items.svelte";

	export let name;

	const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
</script>

<div class="outer">
	<section class="controls">
		<ControlPanel 
			on:addRandom={() => entries.addRandom()}
			on:clearTemp={() => entries.clearTemp()}
		/>
	</section>
	<section>
		<div class="primary">
			<h3>{name} ({now})</h3>
			<Items items={$entries}>
			</Items>
		</div>
	</section>
</div>

<style>
	.controls {
		flex-grow: 0;
		flex-shrink: 0;
		flex-direction: column;
		width: 20%;
	}	

	.outer {
		display: flex;
		flex-direction: row;
    }

	.primary {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h3 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}
</style>