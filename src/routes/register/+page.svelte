<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	import type { PageData } from "./$types";

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form, {
		resetForm: true
	});

	$: console.log($form);
</script>

<div class="py-20">
	<div class="flex w-full flex-col items-center">
		<div class="max-w-2xl text-center">
			<h1 class="text-4xl font-semibold">Register for an account</h1>
		</div>
		<div class="card mt-6 w-full p-4">
			<form method="POST" class="form flex flex-col space-y-6" use:enhance>
				<label class="space-y-2" for="full_name">
					<span>Name</span>
					<input type="text" name="full_name" bind:value={$form.full_name} class="input px-5 py-2" />
					{#if $errors.full_name}
						<span class="block text-red-600 dark:text-red-500">{$errors.full_name}</span>
					{/if}
				</label>
				<label class="space-y-2" for="email">
					<span>Email</span>
					<input type="email" name="email" bind:value={$form.email} class="input px-5 py-2" />
					{#if $errors.email}
						<span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
					{/if}
				</label>
				<label class="space-y-2" for="password">
					<span>Password</span>
					<input type="password" name="password" bind:value={$form.password} class="input px-5 py-2" />
					{#if $errors.password}
						<span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
					{/if}
				</label>
				<label class="space-y-2" for="passwordConfirm">
					<span>Confirm Password</span>
					<input type="password" name="passwordConfirm" bind:value={$form.passwordConfirm} class="input px-5 py-2" />
					{#if $errors.passwordConfirm}
						<span class="block text-red-600 dark:text-red-500">{$errors.passwordConfirm}</span>
					{/if}
				</label>
				<button type="submit" class="btn w-full bg-primary-600">Register</button>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
					Already have an account? <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">Sign in</a>
				</div>
			</form>
		</div>
	</div>
</div>
