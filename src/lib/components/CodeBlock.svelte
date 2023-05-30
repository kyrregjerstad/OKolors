<script lang="ts">
	import type { NamedLchColor } from "$types";
	import { CSSGenerator } from "$scripts/utils/generateCSS";

	export let inputColors: NamedLchColor[] = [];

	let codeString = "";

	$: {
		const generator = new CSSGenerator(inputColors);
		codeString = generator.generate();
	}
</script>

<pre>
{codeString}
</pre>

<style>
	pre {
		font-family: monospace;
		font-size: 1.1rem;
		background-color: var(--color-100);
		color: var(--color-900);
		padding: 1rem;
		border-radius: 0.5rem;
		margin-block: 1rem;
	}
</style>
