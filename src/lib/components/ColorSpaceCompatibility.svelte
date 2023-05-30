<script lang="ts">
	export let deviceColorSpace: string | null = null;
</script>

<div class="card p-5 text-center my-5 variant-filled mx-auto flex w-fit">
	<p>Your device's color space: {deviceColorSpace || "please wait..."}</p>
</div>

<style>
</style>
