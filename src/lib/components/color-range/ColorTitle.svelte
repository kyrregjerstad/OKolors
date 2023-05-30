<script lang="ts">
	import { capitalizeName } from "$scripts/utils/capitalizeName";

	export let colorName: string;

	$: displayName = capitalizeName(colorName);

	function handleInputChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (!input) return;
		displayName = capitalizeName(input.value);
	}
</script>

<div class="name">
	<input required min="1" bind:value={displayName} on:input={handleInputChange} />
</div>

<style>
	.name {
		font-size: 2rem;
		align-self: flex-start;
		width: 100%;
		display: flex;
	}

	input {
		background-color: transparent;
		color: var(--color-text);
		border: none;
		width: 100%;
	}
</style>
