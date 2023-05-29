<script lang="ts">
	import type { LCH } from "$types";

	export let sliderInputValues: LCH = {
		l: 0.5,
		c: 0.5,
		h: 0.5
	};
</script>

<div class="input-sliders">
	<label for="lightness">
		<input type="range" name="lightness" id="" bind:value={sliderInputValues.l} min="0" max="1" step="0.01" />
		Lightness
	</label>
	<label for="chroma">
		<input type="range" name="" id="chrome" bind:value={sliderInputValues.c} min="0" max="1" step="0.01" />
		Chroma
	</label>
	<label for="hue">
		<input type="range" name="" id="hue" bind:value={sliderInputValues.h} min="0" max="360" />
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
