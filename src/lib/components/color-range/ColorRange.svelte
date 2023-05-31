<script lang="ts">
	import type { LCH, NamedLchColor } from "$types";
	import { lightnessModifiers } from "$lib/lightnessModifiers";
	import { fly, slide } from "svelte/transition";

	import ColorCell from "./ColorCell.svelte";
	import ColorInput from "../ColorInput.svelte";
	import ColorTitle from "./ColorTitle.svelte";
	import DeleteColorButton from "../buttons/DeleteColorButton.svelte";
	import SaveColorButton from "../buttons/SaveColorButton.svelte";

	export let inputColor: NamedLchColor;
</script>

<div class="card my-5 flex flex-col items-center justify-center p-4" in:fly={{ y: -200 }} out:slide={{ duration: 350 }}>
	<div class="flex w-full items-center justify-center self-start">
		<DeleteColorButton colorId={inputColor.id} />
		<ColorTitle colorName={inputColor.name} colorId={inputColor.id} />
		<SaveColorButton {inputColor} />
	</div>
	<div class="color-cells my-3 flex aspect-[4/1] w-full gap-0 lg:aspect-[6/1] xl:aspect-[7/1]">
		{#each lightnessModifiers as modifier, index}
			<ColorCell inputColor={inputColor.values} lightnessModifier={modifier} {index} />
		{/each}
	</div>
	<ColorInput bind:sliderInputValues={inputColor.values} colorId={inputColor.id} />
</div>

<style>
</style>
