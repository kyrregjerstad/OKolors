<script lang="ts">
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	import "../app.postcss";

	import * as config from "$config";
	import MetaTags from "$lib/components/SEO/MetaTags.svelte";

	import hljs from "highlight.js";
	import "highlight.js/styles/github-dark.css";
	import { storeHighlightJs } from "@skeletonlabs/skeleton";

	storeHighlightJs.set(hljs);
	// import "$styles/app.css";
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<MetaTags />

<main>
	<slot />
</main>

<style>
</style>
