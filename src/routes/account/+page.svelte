<script lang="ts">
	import EmailForm from "$lib/components/forms/EmailForm.svelte";
	import PasswordForm from "$lib/components/forms/PasswordForm.svelte";
	import ProfileForm from "$lib/components/forms/ProfileForm.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<section class="card variant-filled-primary mt-10 flex flex-col gap-2 p-5">
	<ProfileForm data={data.profileForm} />
	<EmailForm data={data.emailForm} />
	<PasswordForm data={data.passwordForm} />
</section>
