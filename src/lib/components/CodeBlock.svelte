<script lang="ts">
	import type { NamedLchColor, LCH } from "$types";
	import { lightnessModifiers, colorSteps, lightnessSteps } from "$lib/lightnessModifiers";

	import { formatHex } from "culori";
	import naevner from "@samhaeng/naevner";
	import type { lch } from "culori";

	formatHex("oklch(0.5 0.25 18)");

	export let inputColors: NamedLchColor[] = [];

	let codeString = "";

	function generateColorValue(name: string, modifier: number) {
		const l = `calc(var(--${name}-l) ${modifier >= 0 ? "+" : "-"} ${Math.abs(modifier)})`;

		return `oklch(${l} var(--${name}-c) var(--${name}-h))`;
	}

	function colorFromLchToHex(color: LCH): string {
		return formatHex(`oklch(${color.l} ${color.c} ${color.h})`) as string;
	}

	function generateColorNameFromHex(colorInHex: string) {
		// const colorInHex = formatHex(`oklch(${color.color.l} ${color.color.c} ${color.color.h})`);

		return naevner(colorInHex);
	}

	function generateCSSBaseVariable(name: string, value: number) {
		return `--${name}-${value}`;
	}

	function generateCSSColorVariation(name: string, variation: number, modifier: number, color: LCH) {
		return `--${name}-${variation}: oklch(calc(var(--${name}-l) + ${modifier}) var(--${name}-c) var(--${name}-h))`;
	}

	function generateCSSColorVariations(colors: NamedLchColor[], steps) {
		return colors.map((color: NamedLchColor) => {
			const colorVariations = Array.from(steps, ([step, modifier]) =>
				generateCSSColorVariation(color.name, step, modifier, color.color)
			);
			return colorVariations;
		});
	}

	const colorVariations = generateCSSColorVariations(inputColors, lightnessSteps);

	console.log(colorVariations);

	function generateCSSCodeText(inputColors) {
		inputColors.forEach(({ name, color }: NamedLchColor) => {
			const colorInHex = colorFromLchToHex(color);
			const colorName = generateColorNameFromHex(colorInHex);

			let codeString = "";

			codeString = `
			\n\n
			/* ${name}: ${colorName} */;\n
			\n
			${generateCSSBaseVariable(name, color.l)};
			${generateCSSBaseVariable(name, color.c)};
			${generateCSSBaseVariable(name, color.h)};
			\n

			`;
		});

		let codeString = "";
		codeString += `root: {`;
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
			const steps = colorSteps;
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
