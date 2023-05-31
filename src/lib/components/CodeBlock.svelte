<script lang="ts">
	import type { NamedLchColor } from "$types";
	import { CssCodeBlockGenerator } from "$scripts/utils/cssCodeBlockGenerator";
	import { CodeBlock } from "@skeletonlabs/skeleton";

	export let inputColors: NamedLchColor[] = [];

	let codeString = "";

	$: {
		const generator = new CssCodeBlockGenerator(inputColors);
		codeString = generator.generateRootCss();
	}
</script>

<CodeBlock language="css" code={codeString} lineNumbers class="border border-primary-500" />
