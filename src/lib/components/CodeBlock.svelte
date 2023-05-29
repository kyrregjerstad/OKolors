<script lang="ts">
	import type { NamedLchColor, LCH } from "$types";
	import { lightnessModifiers } from "$lib/lightnessModifiers";

	import { formatHex } from "culori";
	import naevner from "@samhaeng/naevner";

	formatHex("oklch(0.5 0.25 18)");

	export let inputColors: NamedLchColor[] = [];

	let codeString = "";

	function generateColorValue(name: string, modifier: number) {
		const l = `calc(var(--${name}-l) ${modifier >= 0 ? "+" : "-"} ${Math.abs(modifier)})`;

		return `oklch(${l} var(--${name}-c) var(--${name}-h))`;
	}

	$: {
		codeString = "";
		codeString += `root: {`;

		inputColors.forEach(color => {
			const colorInHex = formatHex(`oklch(${color.color.l} ${color.color.c} ${color.color.h})`);
			let colorName;
			if (colorInHex) {
				colorName = naevner(colorInHex);
			}

			const base = `--${color.name}`;

			codeString += `\n\n`;
			codeString += `/* ${color.name}: ${colorName} */;\n`;
			codeString += `\n`;
			codeString += `--${color.name}-l: ${color.color.l};\n`;
			codeString += `--${color.name}-c: ${color.color.c};\n`;
			codeString += `--${color.name}-h: ${color.color.h};\n\n`;

			const offsets = lightnessModifiers;
			const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
			for (let i = 0; i < steps.length; i++) {
				codeString += `${base}-${steps[i]}: oklch(calc(var(${base}-l) + ${offsets[i].toFixed(
					1
				)}) var(${base}-c) var(${base}-h));\n`;
			}

			codeString += "\n";
		});
		codeString += `};\n`;
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
