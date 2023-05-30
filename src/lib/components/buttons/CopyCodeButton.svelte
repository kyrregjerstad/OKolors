<script>
	import Icon from "@iconify/svelte";
	import { copy } from "svelte-copy";

	export let codeString = "";

	let tooltipMsg = "Click to copy";

	function handleCopy() {
		tooltipMsg = "Copied! 👍";
	}
</script>

<button
	class="copy-icon"
	use:copy={codeString}
	on:click={handleCopy}
	on:mouseleave={() => (tooltipMsg = "Click to copy")}
>
	<Icon icon="material-symbols:copy-all" width={35} />
	<div class="tooltip">{tooltipMsg}</div>
</button>

<style lang="postcss">
	.copy-icon {
		display: flex;
		position: absolute;
		right: 1rem;
		top: 1rem;
		cursor: pointer;
		background: transparent;
		opacity: 0.5;
		transition: all 0.2s ease-in-out;

		&:hover {
			opacity: 1;

			.tooltip {
				opacity: 1;
				transform: translateY(50%);
			}
		}
	}

	.tooltip {
		position: absolute;
		right: 1rem;
		top: 0;
		transform: translateY(150%);
		transition: all 0.2s ease-in-out;
		width: 10rem;
		opacity: 0;
	}
</style>
