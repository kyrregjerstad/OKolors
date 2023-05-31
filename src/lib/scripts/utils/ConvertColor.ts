import type { NamedLchColor } from "$types";
import { formatHex } from "culori";
// import naevner from "@samhaeng/naevner";

export class ConvertColor {
	color: NamedLchColor;

	constructor(color: NamedLchColor) {
		this.color = color;
	}

	toHex(): string {
		const { l, c, h } = this.color.values;
		return formatHex(`oklch(${l} ${c} ${h})`) as string;
	}

	toName(): string {
		// return `/* ${naevner(this.toHex())} */ \n`;
		return `/* Temporary Color */ \n`;
	}
}
