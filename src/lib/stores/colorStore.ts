import { writable } from "svelte/store";

export const colorStore = writable([
	{
		name: "primary",
		color: {
			l: 0.5,
			c: 0.25,
			h: 18
		}
	},
	{
		name: "secondary",
		color: {
			l: 0.5,
			c: 0.25,
			h: 180
		}
	}
]);
