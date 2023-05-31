<script lang="ts">
	import type { EmailSchema } from "$lib/schemas";
	import { superForm } from "sveltekit-superforms/client";
	import type { Validation } from "sveltekit-superforms/index";

	export let data: Validation<EmailSchema>;

	const { form, errors, enhance } = superForm(data);
</script>

<div>
	<form method="POST" action="?/updateEmail" use:enhance class="form mt-8 flex flex-col gap-5">
		<label for="email" class="label">
			<span>Email</span>
			<input type="text" name="email" bind:value={$form.email} class="input px-4 py-2 text-primary-50" />
			{#if $errors.email}
				<span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
			{/if}
		</label>
		<button type="submit" class="btn variant-filled">Update Email</button>
	</form>
</div>
