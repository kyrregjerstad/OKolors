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

<div class="card p-4 my-5" in:fly={{ y: -200 }} out:slide={{ duration: 350 }}>
	<div class="flex items-center justify-center">
		<DeleteColorButton colorId={inputColor.id} />
		<ColorTitle colorName={inputColor.name} colorId={inputColor.id} />
	</div>
	<div class="color-cells flex gap-1 w-full h-[250px] my-3">
		{#each lightnessModifiers as modifier, index}
			<ColorCell inputColor={inputColor.color} lightnessModifier={modifier} {index} />
		{/each}
	</div>
	<ColorInput bind:sliderInputValues={inputColor.color} colorId={inputColor.id} />
</div>

<style>
</style>
