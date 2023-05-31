import type { NamedLchColor } from "$types";
import { formatHex } from "culori";
// import naevner from "@samhaeng/naevner";

export class CssCustomPropertyGenerator {
	color: NamedLchColor;

	constructor(color: NamedLchColor) {
		this.color = color;
	}

	toHex(): string {
		const { l, c, h } = this.color.color;
		return formatHex(`oklch(${l} ${c} ${h})`) as string;
	}

	nameFromHex(): string {
		// return `/* ${naevner(this.toHex())} */ \n`;
		return `/* Temporary Color */ \n`;
	}

	generateCustomPropertyName(name: string, suffix: string): string {
		const sanitized = name.replace(/\s/g, "-");
		return `--${sanitized}-${suffix}`;
	}

	generateBaseColorCustomProperties(): string {
		const { name, color: colorValues } = this.color;
		const customProperties = [
			`${this.generateCustomPropertyName(name, "l")}: ${colorValues.l};`,
			`${this.generateCustomPropertyName(name, "c")}: ${colorValues.c};`,
			`${this.generateCustomPropertyName(name, "h")}: ${colorValues.h};\n`
		];
		return customProperties.join("\n");
	}

	generateColorVariation(variation: number, modifier: number): string {
		const { name } = this.color;
		const sanitizedName = name.replace(/\s/g, "-");
		const modifierSign = modifier < 0 ? "-" : "+";
		const absoluteModifier = Math.abs(modifier);
		return `--${sanitizedName}-${variation}: oklch(calc(var(--${name}-l) ${modifierSign} ${absoluteModifier}) var(--${name}-c) var(--${name}-h));`;
	}

	generateCustomProperties(steps: Map<number, number>): string[] {
		const colorVariations = Array.from(steps, ([step, modifier]) => this.generateColorVariation(step, modifier));
		const variationsString = colorVariations.join("\n").trim(); // Ensure no leading or trailing newline
		return [this.nameFromHex(), this.generateBaseColorCustomProperties(), variationsString];
	}
}
