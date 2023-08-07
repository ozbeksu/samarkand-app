<script lang="ts">
	import type { ActionData } from "./$types";
	import { Input, Button } from "$lib/components";

	export let form: ActionData | undefined = undefined;
</script>

<svelte:head>
	<title>Register - BubbleBird</title>
</svelte:head>

<form id="profile" method="POST">
	<div class="w-full p-4">
		<Input
			class="w-full"
			id="username"
			label="Username"
			name="username"
			placeholder="Username"
			required
			type="text"
			value={form?.username ?? ""}
		/>
		{#if form?.errors?.username}
			{#each form?.errors?.username as message}
				<p class="error">{message}</p>
			{/each}
		{/if}
	</div>

	<div class="w-full p-4">
		<Input
			class="w-full"
			id="firstName"
			label="First Name"
			name="firstName"
			placeholder="First Name"
			type="text"
			value={form?.firstName ?? ""}
		/>
		{#if form?.errors?.firstName}
			{#each form?.errors?.firstName as message}
				<p class="error">{message}</p>
			{/each}
		{/if}
	</div>

	<div class="w-full p-4">
		<Input
			class="w-full"
			id="lastName"
			label="Last Name"
			name="lastName"
			placeholder="Last Name"
			type="text"
			value={form?.lastName ?? ""}
		/>
		{#if form?.errors?.lastName}
			{#each form?.errors?.lastName as message}
				<p class="error">{message}</p>
			{/each}
		{/if}
	</div>

	<div class="mt-4 flex flex-row">
		<div class="w-full p-4">
			<Button class="btn-primary w-full" type="submit">Save</Button>
		</div>
	</div>
</form>
