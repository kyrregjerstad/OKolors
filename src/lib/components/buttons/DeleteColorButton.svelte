<script lang="ts">
	import { colorStore } from "$stores/colorStore";
	import Icon from "@iconify/svelte";

	export let colorId: string;

	function handleDeleteClick() {
		$colorStore = $colorStore.filter(color => color.id !== colorId);
	}
</script>

<button on:click={handleDeleteClick}>
	<Icon icon="material-symbols:delete-outline" />
</button>

<style lang="postcss">
	button {
		background: none;
		font-size: 2rem;
		margin-inline: 1rem;
		padding: 0;

		&:hover {
			color: red;
		}
	}
</style>
