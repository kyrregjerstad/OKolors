<script lang="ts">
	import type { NamedLchColor } from "$types";
	import { CSSGenerator } from "$scripts/utils/generateCSS";
	import CopyCodeButton from "./buttons/CopyCodeButton.svelte";
	import { colorStore } from "$stores/colorStore";
	import { CodeBlock } from "@skeletonlabs/skeleton";

	export let inputColors: NamedLchColor[] = [];

	let codeString = "";

	$: {
		const generator = new CSSGenerator(inputColors);
		codeString = generator.generate();
	}
</script>

<CodeBlock language="css" code={codeString} lineNumbers />

<!-- 
<section>
	<CopyCodeButton {codeString} />
	<pre class="code-block">{codeString}</pre>
</section> -->

<style>
</style>
