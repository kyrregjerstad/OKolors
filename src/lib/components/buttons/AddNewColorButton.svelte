<script lang="ts">
	import { colorStore } from "$stores/colorStore";

	function handleClick(): void {
		colorStore.update(colors => {
			return [...colors, { name: "New Color", color: { l: 0.5, c: 0.5, h: 0.5 } }];
		});
	}
</script>

<button on:click={handleClick}> Add new color </button>

<style>
	button {
		display: block;
		margin: 0 auto;
		font-size: var(--font-size-L);
		background-color: white;
		color: black;
		padding: 1rem 2rem;
	}
</style>
