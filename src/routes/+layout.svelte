<script lang="ts">
	// Your selected Skeleton theme:
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css";

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import "@skeletonlabs/skeleton/styles/skeleton.css";

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import "../app.postcss";

	import * as config from "$config";
	import MetaTags from "$lib/components/SEO/MetaTags.svelte";
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
