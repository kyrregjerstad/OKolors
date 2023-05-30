import type { NamedLchColor } from "$types";
import { formatHex } from "culori";
import naevner from "@samhaeng/naevner";

export class ColorConverter {
	color: NamedLchColor;

	constructor(color: NamedLchColor) {
		this.color = color;
	}

	toHex(): string {
		const { l, c, h } = this.color.color;
		return formatHex(`oklch(${l} ${c} ${h})`) as string;
	}

	nameFromHex(): string {
		return `/* ${naevner(this.toHex())} */ \n`;
	}

	generateVariableName(name: string, suffix: string): string {
		const sanitized = name.replace(/\s/g, "-");
		return `--${sanitized}-${suffix}`;
	}

	cssBaseVariables(): string {
		const { name, color: colorValues } = this.color;
		const variables = [
			`${this.generateVariableName(name, "l")}: ${colorValues.l};`,
			`${this.generateVariableName(name, "c")}: ${colorValues.c};`,
			`${this.generateVariableName(name, "h")}: ${colorValues.h};\n`
		];
		return variables.join("\n");
	}

	cssColorVariation(variation: number, modifier: number): string {
		const { name } = this.color;
		const modifierSign = modifier < 0 ? "-" : "+";
		const absoluteModifier = Math.abs(modifier);
		return `--${name}-${variation}: oklch(calc(var(--${name}-l) ${modifierSign} ${absoluteModifier}) var(--${name}-c) var(--${name}-h));`;
	}

	cssColorVariations(steps: Map<number, number>): string[] {
		const colorVariations = Array.from(steps, ([step, modifier]) => this.cssColorVariation(step, modifier));
		const variationsString = colorVariations.join("\n").trim(); // Ensure no leading or trailing newline
		return [this.nameFromHex(), this.cssBaseVariables(), variationsString];
	}
}
