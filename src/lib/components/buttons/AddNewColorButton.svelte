<script lang="ts">
	import { colorStore, getDefaultColor } from "$stores/colorStore";

	function handleClick(): void {
		colorStore.update(colors => {
			return [...colors, getDefaultColor()];
		});
	}
</script>

<button class="btn variant-filled" on:click={handleClick}>Add new color</button>

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
