<script lang="ts">
	import { colorStore, getDefaultColor } from "$stores/colorStore";

	function handleClick(): void {
		colorStore.update(colors => {
			return [...colors, getDefaultColor()];
		});
	}
</script>

<button class="btn-xl rounded-full variant-filled mx-auto flex my-10" on:click={handleClick}>Add new color</button>
