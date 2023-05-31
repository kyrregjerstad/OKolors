<script lang="ts">
	import type { ProfileSchema } from "$lib/schemas";
	import { superForm } from "sveltekit-superforms/client";
	import type { Validation } from "sveltekit-superforms/index";

	export let data: Validation<ProfileSchema>;

	const { form, errors, enhance } = superForm(data);
</script>

<div>
	<form method="POST" action="?/updateProfile" use:enhance class="form mt-8 flex flex-col gap-5">
		<label for="full_name" class="label">
			<span>Name</span>
			<input type="text" name="full_name" bind:value={$form.full_name} class="input px-4 py-2 text-primary-50" />
			{#if $errors.full_name}
				<span class="block text-red-600 dark:text-red-500">{$errors.full_name}</span>
			{/if}
		</label>
		<button type="submit" class="btn variant-filled">Update Name</button>
	</form>
</div>
