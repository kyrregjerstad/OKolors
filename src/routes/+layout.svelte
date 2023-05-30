<script lang="ts">
	import "../theme.postcss";
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	import "../app.postcss";
	import * as config from "$config";
	import MetaTags from "$lib/components/SEO/MetaTags.svelte";
	import hljs from "highlight.js";
	import "highlight.js/styles/github-dark.css";
	import { storeHighlightJs } from "@skeletonlabs/skeleton";
	import { AppShell } from "@skeletonlabs/skeleton";
	import { AppBar } from "@skeletonlabs/skeleton";
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import Icon from "@iconify/svelte";

	let scrollY = 0;

	$: hasScrolled = scrollY > 50;

	$: console.log(scrollY);

	storeHighlightJs.set(hljs);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<svelte:window bind:scrollY />
<MetaTags />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<div>
					<Icon icon="tabler:color-filter" height={25} />
				</div>
			</svelte:fragment>
			<h1 class="text-xl" class:text-sm={hasScrolled}>
				<span
					class=" bg-clip-text text-transparent box-decoration-clone text-3xl
					bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400
					"
				>
					{config.title}
				</span>
			</h1>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>

<!-- <main>
	<slot />
</main> -->

<style>
</style>
