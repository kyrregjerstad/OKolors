<script lang="ts">
	import { colorStore } from "$stores/colorStore";
	import Icon from "@iconify/svelte";

	export let colorId: string;

	function handleDeleteClick() {
		$colorStore = $colorStore.filter(color => color.id !== colorId);
	}
</script>

<button
	on:click={handleDeleteClick}
	class="flex items-center justify-center text-2xl mr-2 sm:translate-y-0.5 hover:text-warning-500"
>
	<Icon icon="material-symbols:close" />
</button>
