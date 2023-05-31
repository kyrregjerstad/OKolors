<script lang="ts">
	import type { NamedLchColor } from "$types";
	import { CSSGenerator } from "$scripts/utils/generateCSS";
	import { CodeBlock } from "@skeletonlabs/skeleton";

	export let inputColors: NamedLchColor[] = [];

	let codeString = "";

	$: {
		const generator = new CSSGenerator(inputColors);
		codeString = generator.generateRootCss();
	}
</script>

<CodeBlock language="css" code={codeString} lineNumbers class="border border-primary-500" />
