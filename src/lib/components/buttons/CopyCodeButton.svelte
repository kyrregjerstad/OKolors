<script>
	import Icon from "@iconify/svelte";
	import { copy } from "svelte-copy";

	export let codeString = "";
</script>

<button class="copy-icon" use:copy={codeString}>
	<Icon icon="material-symbols:copy-all" width={35} />
</button>

<style>
	.copy-icon {
		display: flex;
		position: absolute;
		right: 1rem;
		top: 1rem;
		cursor: pointer;
		background: transparent;
	}
</style>
