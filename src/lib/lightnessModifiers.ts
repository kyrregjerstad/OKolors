export const lightnessModifiers = [0.5, 0.4, 0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3, -0.4, -0.5];
export const colorSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export type LightnessModifier = (typeof lightnessModifiers)[number];

export const lightnessSteps: Map<number, number> = new Map([
	[50, 0.5],
	[100, 0.4],
	[200, 0.3],
	[300, 0.2],
	[400, 0.1],
	[500, 0],
	[600, -0.1],
	[700, -0.2],
	[800, -0.3],
	[900, -0.4],
	[950, -0.5]
]);
