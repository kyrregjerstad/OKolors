<script lang="ts">
	import { onMount } from "svelte";
	let deviceColorSpace: string | null = null;
	onMount(async () => {
		deviceColorSpace = window.matchMedia("(color-gamut: p3)").matches ? "p3" : "not p3";
	});
</script>

<!-- 
	

	 -->
<div
	class="card variant-filled mx-auto my-10 flex w-fit p-5 text-center !text-white"
	class:!bg-success-500={deviceColorSpace === "p3"}
	class:!text-black={deviceColorSpace === "p3"}
	class:!bg-error-500={deviceColorSpace === "not p3"}
>
	<p>
		Your device's color space:
		<span class="font-bold">
			{deviceColorSpace || "please wait..."}
		</span>
	</p>
</div>

<style>
</style>
