import { writable } from "svelte/store";

export const colorStore = writable([
	{
		name: "primary",
		id: crypto.randomUUID(),
		values: {
			l: 0.5,
			c: 0.25,
			h: 18
		}
	},
	{
		name: "secondary",
		id: crypto.randomUUID(),
		values: {
			l: 0.5,
			c: 0.25,
			h: 180
		}
	}
]);

export function getDefaultColor() {
	return {
		name: "New Color",
		id: crypto.randomUUID(),
		values: {
			l: 0.5,
			c: 0.25,
			h: 18
		}
	};
}
