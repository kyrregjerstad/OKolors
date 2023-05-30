<script lang="ts">
	import { colorStore } from "$stores/colorStore";
	import { capitalizeName } from "$scripts/utils/capitalizeName";
	import { error } from "@sveltejs/kit";

	export let colorName: string;
	export let colorId: string;

	$: displayName = capitalizeName(colorName);

	function handleInputChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (!input) return;
		displayName = capitalizeName(input.value);

		$colorStore = $colorStore.map(color => {
			if (color.id === colorId) {
				return {
					...color,
					name: displayName
				};
			}
			return color;
		});
	}
</script>

<div class="flex w-full text-xl sm:text-4xl" class:error={displayName === ""}>
	<input required min="1" bind:value={displayName} on:input={handleInputChange} />
</div>

<style>
	input {
		background-color: transparent;
		color: var(--color-text);
		border: none;
		width: 100%;
	}

	.error {
		background-color: firebrick;
	}
</style>
