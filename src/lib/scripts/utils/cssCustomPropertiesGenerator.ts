// cssCustomPropertiesGenerator.ts
import type { NamedLchColor } from "$types";
import { ConvertColor } from "./ConvertColor";

export class CssCustomPropertiesGenerator {
	color: NamedLchColor;
	convertColor: ConvertColor;

	constructor(color: NamedLchColor) {
		this.color = color;
		this.convertColor = new ConvertColor(color);
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

	generateColorVariations(variation: number, modifier: number): string {
		const { name } = this.color;
		const sanitizedName = this.sanitizeName(name);
		const modifierSign = modifier < 0 ? "-" : "+";
		const absoluteModifier = Math.abs(modifier);
		return `--${sanitizedName}-${variation}: oklch(calc(var(--${name}-l) ${modifierSign} ${absoluteModifier}) var(--${name}-c) var(--${name}-h));`;
	}

	generateCustomProperties(steps: Map<number, number>): string[] {
		const colorVariations = Array.from(steps, ([step, modifier]) => this.generateColorVariations(step, modifier));
		const variationsString = colorVariations.join("\n").trim(); // Ensure no leading or trailing newline
		return [this.convertColor.toName(), this.generateBaseColorCustomProperties(), variationsString];
	}
}
