import type { NamedLchColor } from "$types";
import { formatHex } from "culori";
// import naevner from "@samhaeng/naevner";

export class CssCustomPropertiesGenerator {
	color: NamedLchColor;

	constructor(color: NamedLchColor) {
		this.color = color;
	}

	toHex(): string {
		const { l, c, h } = this.color.values;
		return formatHex(`oklch(${l} ${c} ${h})`) as string;
	}

	nameFromHex(): string {
		// return `/* ${naevner(this.toHex())} */ \n`;
		return `/* Temporary Color */ \n`;
	}

	sanitizeName(name: string): string {
		return name.replace(/\s/g, "-");
	}

	generateCustomPropertyName(name: string, suffix: string): string {
		const sanitizedName = this.sanitizeName(name);
		return `--${sanitizedName}-${suffix}`;
	}

	generateBaseColorCustomProperties(): string {
		const { name, values: colorValues } = this.color;
		const customProperties = [
			`${this.generateCustomPropertyName(name, "l")}: ${colorValues.l};`,
			`${this.generateCustomPropertyName(name, "c")}: ${colorValues.c};`,
			`${this.generateCustomPropertyName(name, "h")}: ${colorValues.h};\n`
		];
		return customProperties.join("\n");
	}

	generateColorVariation(variation: number, modifier: number): string {
		const { name } = this.color;
		const sanitizedName = this.sanitizeName(name);
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
