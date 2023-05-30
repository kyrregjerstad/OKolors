import type { NamedLchColor } from "$types";
import { ColorConverter } from "./colorConverter";
import { lightnessSteps } from "$lib/lightnessModifiers";

export class CSSGenerator {
	inputColors: NamedLchColor[];

	constructor(inputColors: NamedLchColor[]) {
		this.inputColors = inputColors;
	}

	generate(): string {
		const cssSections = this.inputColors
			.map(color => {
				const colorObj = new ColorConverter(color);
				const colorSection = colorObj.cssColorVariations(lightnessSteps);
				return colorSection.join("\n");
			})
			.join("\n\n\n");

		const rootContent = cssSections
			.split("\n")
			.map(line => (line.trim() ? `\t${line}` : line))
			.join("\n");

		return `:root {\n${rootContent}\n}`;
	}
}
