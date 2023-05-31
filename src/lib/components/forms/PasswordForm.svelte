<script lang="ts">
	import type { PasswordSchema } from "$lib/schemas";
	import { superForm } from "sveltekit-superforms/client";
	import type { Validation } from "sveltekit-superforms/index";

	export let data: Validation<PasswordSchema>;

	const { form, errors, enhance } = superForm(data, {
		resetForm: true
	});
</script>

<div>
	<form method="POST" action="?/updatePassword" use:enhance class="form mt-8 flex flex-col gap-5">
		<label for="password" class="label">
			<span>Password</span>
			<input type="password" name="password" bind:value={$form.password} class="input px-4 py-2 text-primary-50" />
			{#if $errors.password}
				<span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
			{/if}
		</label>
		<label for="passwordConfirm" class="label">
			<span>Confirm Password</span>
			<input
				type="password"
				name="passwordConfirm"
				bind:value={$form.passwordConfirm}
				class="input px-4 py-2 text-primary-50"
			/>
			{#if $errors.passwordConfirm}
				<span class="block text-red-600 dark:text-red-500">{$errors.passwordConfirm}</span>
			{/if}
		</label>
		<button type="submit" class="btn variant-filled">Update password</button>
	</form>
</div>
