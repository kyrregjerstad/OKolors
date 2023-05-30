<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import AddNewColorButton from "$lib/components/buttons/AddNewColorButton.svelte";
	import ColorRange from "$lib/components/color-range/ColorRange.svelte";
	import { colorStore } from "$stores/colorStore";
	import { flip } from "svelte/animate";

	/* 
	
	TODO: 
	- Add a way to remove colors ✓
	- Add a way to change the order of colors

	- Check if device is p3 compatible
	- Check if screen is p3 compatible?

	- Add better color picker

	- Add copy button to code block
	- Add option to toggle color name comments in code block

	- Add presets

	- Add login?
	- Add option to save your own presets?
	- Add option to share presets

	- Highlight that the center color is the one that is being changed


	- fix bug where the codeblock css is not being updated from the store

	
	*/

	$: console.log($colorStore);
</script>

<h1>SvelteKit Default Template</h1>

{#each $colorStore as inputColor (inputColor.id)}
	<div animate:flip={{ duration: 350 }}>
		<ColorRange {inputColor} />
	</div>
{/each}
<AddNewColorButton />
<CodeBlock inputColors={$colorStore} />

<style>
	h1 {
		color: var(--test-100);
	}
</style>
