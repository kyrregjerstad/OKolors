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
	class="input-sliders mt-6 flex w-full max-w-6xl flex-col justify-center gap-6 sm:flex-row sm:items-center lg:gap-16"
>
	<label
		class="flex w-full flex-1 flex-col justify-center gap-2 sm:items-center"
		for="lightness"
		in:fade={{ duration: 500, delay: 600 }}
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
		class="flex w-full flex-1 flex-col justify-center gap-2 sm:items-center"
		for="chroma"
		in:fade={{ duration: 500, delay: 800 }}
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
		class="flex w-full flex-1 flex-col justify-center gap-2 sm:items-center"
		for="hue"
		in:fade={{ duration: 500, delay: 1000 }}
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
