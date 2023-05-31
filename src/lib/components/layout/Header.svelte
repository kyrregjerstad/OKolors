<script lang="ts">
	import { AppBar } from "@skeletonlabs/skeleton";
	import Icon from "@iconify/svelte";
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import { popup } from "@skeletonlabs/skeleton";
	import type { PopupSettings } from "@skeletonlabs/skeleton";
	import type { LayoutData } from "../../../routes/$types";

	export let title = "";
	export let session: LayoutData["session"];

	$: ({ full_name } = session?.user.user_metadata || { full_name: "User" });

	$: console.log(full_name);

	const popupHover: PopupSettings = {
		event: "click",
		target: "popupHover",
		placement: "bottom-end"
	};

	let hasScrolled = false;
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" padding="py-6 px-8">
	<svelte:fragment slot="lead">
		<div>
			<LightSwitch />
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
	<svelte:fragment slot="trail">
		{#if session}
			<button use:popup={popupHover} class="[&>*]:pointer-events-none">
				<Icon icon="material-symbols:account-circle" height={25} />
			</button>
			<div class="card variant-filled-primary p-8" data-popup="popupHover">
				<h4 class="h4 my-2">Hi {full_name || "There"}! 👋</h4>
				<ul class="list my-5 flex flex-col gap-1">
					<li>- Account</li>
					<li>- My Presets</li>
				</ul>
				<form action="/logout" method="POST">
					<button type="submit" class="btn variant-filled">Log Out</button>
				</form>
			</div>
		{:else}
			<a href="/login" class="btn variant-filled">Log In</a>
		{/if}
	</svelte:fragment>
</AppBar>
