<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { LCH, NamedLchColor } from "$types";

	export let inputColor: NamedLchColor;

	async function saveColor() {
		const response = await fetch("./api/saveColor", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(inputColor)
		});

		const data = await response.json();
		console.log(data);
	}

	console.log(inputColor);
</script>

<button on:click={saveColor} class="btn-icon self-end justify-self-end">
	<Icon icon="material-symbols:save" height={25} />
</button>
