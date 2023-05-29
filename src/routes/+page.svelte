<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import AddNewColorButton from "$lib/components/buttons/AddNewColorButton.svelte";
	import ColorRange from "$lib/components/color-range/ColorRange.svelte";
	import { colorStore } from "$stores/colorStore";
</script>

<h1>SvelteKit Default Template</h1>

{#each $colorStore as inputColor}
	<ColorRange {inputColor} />
{/each}
<AddNewColorButton />
<CodeBlock inputColors={$colorStore} />

<style>
	h1 {
		color: var(--test-100);
	}
</style>
