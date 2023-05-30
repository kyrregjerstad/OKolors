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

<div class="input-sliders">
	<label for="lightness" in:fade={{ duration: 500, delay: 200 }} out:fade={{ duration: 200 }}>
		<input
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
	<label for="chroma" in:fade={{ duration: 500, delay: 300 }} out:fade={{ duration: 200 }}>
		<input
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
	<label for="hue" in:fade={{ duration: 500, delay: 400 }} out:fade={{ duration: 200 }}>
		<input
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
	.input-sliders {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
</style>
