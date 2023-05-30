<script lang="ts">
	import type { LCH } from "$types";
	import { colorStore } from "$stores/colorStore";
	import { fade } from "svelte/transition";

	export let colorId: string;

	function handleSliderChange() {
		colorStore.update(colors => {
			return colors.map(color => {
				if (color.id === colorId) {
					return { ...color, color: sliderInputValues };
				} else {
					return color;
				}
			});
		});
	}

	export let sliderInputValues: LCH = {
		l: 0.5,
		c: 0.5,
		h: 0.5
	};
</script>

<div
	class="input-sliders flex w-full justify-center sm:items-center gap-6 flex-col sm:flex-row mt-6 max-w-6xl lg:gap-16"
>
	<label
		class="flex sm:items-center justify-center gap-2 flex-col flex-1 w-full"
		for="lightness"
		in:fade={{ duration: 500, delay: 200 }}
		out:fade={{ duration: 200 }}
	>
		<input
			class="w-full"
			type="range"
			name="lightness"
			id=""
			bind:value={sliderInputValues.l}
			min="0"
			max="1"
			step="0.01"
			on:input={handleSliderChange}
		/>
		Lightness
	</label>
	<label
		class="flex sm:items-center justify-center gap-2 flex-col flex-1 w-full"
		for="chroma"
		in:fade={{ duration: 500, delay: 300 }}
		out:fade={{ duration: 200 }}
	>
		<input
			class="w-full"
			type="range"
			name=""
			id="chrome"
			bind:value={sliderInputValues.c}
			min="0"
			max="1"
			step="0.01"
			on:input={handleSliderChange}
		/>
		Chroma
	</label>
	<label
		class="flex sm:items-center justify-center gap-2 flex-col flex-1 w-full"
		for="hue"
		in:fade={{ duration: 500, delay: 400 }}
		out:fade={{ duration: 200 }}
	>
		<input
			class="w-full"
			type="range"
			name=""
			id="hue"
			bind:value={sliderInputValues.h}
			min="0"
			max="360"
			on:input={handleSliderChange}
		/>
		Hue
	</label>
</div>

<style>
</style>
