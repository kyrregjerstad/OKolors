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
	import type { LayoutData } from "./$types";
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";

	export let data: LayoutData;

	$: ({ session, supabase } = data);
	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});
		return () => subscription.unsubscribe();
	});

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
