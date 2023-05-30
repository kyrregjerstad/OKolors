<script lang="ts">
	import type { LCH, NamedLchColor } from "$types";
	import { lightnessModifiers } from "$lib/lightnessModifiers";
	import { fly, slide } from "svelte/transition";

	import ColorCell from "./ColorCell.svelte";
	import ColorInput from "../ColorInput.svelte";
	import ColorTitle from "./ColorTitle.svelte";
	import DeleteColorButton from "../buttons/DeleteColorButton.svelte";

	export let inputColor: NamedLchColor;
</script>

<div class="wrapper" in:fly={{ y: -200 }} out:slide={{ duration: 350 }}>
	<div class="button-and-name">
		<DeleteColorButton colorId={inputColor.id} />
		<ColorTitle colorName={inputColor.name} />
	</div>
	<div class="color-cells">
		{#each lightnessModifiers as modifier}
			<ColorCell inputColor={inputColor.color} lightnessModifier={modifier} />
		{/each}
	</div>
	<ColorInput bind:sliderInputValues={inputColor.color} colorId={inputColor.id} />
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

	.button-and-name {
		display: flex;
		align-items: center;
		align-self: flex-start;
	}
</style>
