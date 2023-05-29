<script lang="ts">
	import type { LCH, NamedLchColor } from "$types";
	import { lightnessModifiers } from "$lib/lightnessModifiers";

	import { colorStore } from "$stores/colorStore";

	import ColorCell from "./ColorCell.svelte";
	import ColorInput from "../ColorInput.svelte";
	import ColorTitle from "./ColorTitle.svelte";

	export let inputColor: NamedLchColor;

	function updateColorName(newName: string) {
		colorStore.update(colors => {
			return colors.map(color => {
				if (color === inputColor) {
					return { ...color, name: newName };
				} else {
					return color;
				}
			});
		});
	}

	let displayName = inputColor.name[0].toUpperCase() + inputColor.name.slice(1);

	// $: updateColorName(displayName);
</script>

<div class="wrapper">
	<ColorTitle bind:displayName />
	<div class="color-cells">
		{#each lightnessModifiers as modifier}
			<ColorCell inputColor={inputColor.color} lightnessModifier={modifier} />
		{/each}
	</div>
	<ColorInput bind:sliderInputValues={inputColor.color} />
</div>

<style>
	.color-cells {
		display: flex;
		gap: 0.5rem;
		width: 100%;
		height: 200px;
		margin-block: 1rem;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-block: 3rem;
	}
</style>
