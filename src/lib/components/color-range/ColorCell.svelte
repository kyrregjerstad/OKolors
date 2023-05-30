<script lang="ts">
	import type { LCH } from "$types";

	export let inputColor: LCH = {
		l: 0.5,
		c: 0.25,
		h: 18
	};
	export let lightnessModifier = 0;
</script>

<div style="background-color: oklch({inputColor.l + lightnessModifier} {inputColor.c} {inputColor.h});" />

<style>
	div {
		flex: 1;
	}
</style>
