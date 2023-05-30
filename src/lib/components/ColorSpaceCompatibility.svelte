<script lang="ts">
	export let deviceColorSpace: string | null = null;
</script>

<div>
	<p>Your device's color space: {deviceColorSpace || "please wait..."}</p>
</div>

<style>
	div {
		background-color: var(--test-100);
		width: 100%;
	}
</style>
