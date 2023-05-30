<script>
	import { AppBar } from "@skeletonlabs/skeleton";
	import Icon from "@iconify/svelte";
	import { LightSwitch } from "@skeletonlabs/skeleton";

	export let title = "";

	let hasScrolled = false;
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<div>
			<Icon icon="tabler:color-filter" height={25} />
		</div>
	</svelte:fragment>
	<h1 class="text-xl" class:text-sm={hasScrolled}>
		<span
			class=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400
					box-decoration-clone bg-clip-text text-3xl text-transparent
					"
		>
			{title}
		</span>
	</h1>
	<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
