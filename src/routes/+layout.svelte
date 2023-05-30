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
	import Footer from "$lib/components/layout/Footer.svelte";
	import Header from "$lib/components/layout/Header.svelte";
	import { clampRgb } from "culori";

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
	<main class="flex w-full items-center justify-center">
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
