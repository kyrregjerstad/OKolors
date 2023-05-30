<script lang="ts">
	import type { NamedLchColor } from "$types";
	import { CSSGenerator } from "$scripts/utils/generateCSS";
	import CopyCodeButton from "./buttons/CopyCodeButton.svelte";
	import { colorStore } from "$stores/colorStore";

	export let inputColors: NamedLchColor[] = [];

	let codeString = "";

	$: {
		const generator = new CSSGenerator(inputColors);
		codeString = generator.generate();
	}
</script>

<section>
	<CopyCodeButton {codeString} />
	<pre class="code-block">
		{codeString}
	</pre>
</section>

<style>
	section {
		position: relative;
	}
	pre {
		font-family: monospace;
		font-size: 1.1rem;
		background-color: var(--color-100);
		color: var(--color-900);
		padding: 1rem;
		border-radius: 0.5rem;
		margin-block: 1rem;
		width: 100%;
		overflow: scroll;
		text-align: left;
	}
</style>
