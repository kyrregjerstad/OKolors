import type { NamedLchColor } from "$types";
import { CssCustomPropertiesGenerator } from "./colorConverter";
import { lightnessSteps } from "$lib/lightnessModifiers";

export class CSSGenerator {
	sourceColors: NamedLchColor[];

	constructor(sourceColors: NamedLchColor[]) {
		this.sourceColors = sourceColors;
	}

	generateRootCss(): string {
		const cssSections = this.sourceColors
			.map(color => {
				const customPropertiesGenerator = new CssCustomPropertiesGenerator(color);
				const colorVariantsSection = customPropertiesGenerator.generateCustomProperties(lightnessSteps);
				return colorVariantsSection.join("\n");
			})
			.join("\n\n\n");

		const rootContent = cssSections
			.split("\n")
			.map(line => (line.trim() ? `\t${line}` : line))
			.join("\n");

		return `:root {\n${rootContent}\n}`;
	}
}
