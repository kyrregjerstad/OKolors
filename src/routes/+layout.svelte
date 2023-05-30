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
	import Footer from "$lib/components/layout/Footer.svelte";
	import Header from "$lib/components/layout/Header.svelte";

	let scrollY = 0;

	$: hasScrolled = scrollY > 50;

	$: console.log(scrollY);

	storeHighlightJs.set(hljs);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<MetaTags />

<AppShell>
	<svelte:fragment slot="header">
		<Header title={config.title} />
	</svelte:fragment>
	<main class="flex w-full flex-col items-center justify-center gap-20 px-2 sm:px-8">
		<slot />
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer author={config.author} />
	</svelte:fragment>
</AppShell>

<!-- <main>
	<slot />
</main> -->

<style>
</style>
