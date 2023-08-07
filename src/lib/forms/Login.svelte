<script lang="ts">
	import type { ActionData } from "./$types";
	import { enhance } from "$app/forms";
	import { Button, Checkbox, Input } from "$lib/components";

	import MailLine from "svelte-remixicon/lib/icons/MailLine.svelte";
	import EyeLine from "svelte-remixicon/lib/icons/EyeLine.svelte";
	import EyeCloseLine from "svelte-remixicon/lib/icons/EyeCloseLine.svelte";

	export let form: ActionData | undefined = undefined;

	let show: boolean;
	let remember: boolean;
</script>

<svelte:head>
	<title>Login - Samarkand</title>
</svelte:head>

<form id="sign-in" method="POST" use:enhance>
	<div class="w-full p-4">
		<Input
			class="w-full"
			id="email"
			label="Email"
			name="email"
			placeholder="Email"
			required
			type="email"
			value={form?.email ?? ""}
		>
			<MailLine class="h-5 w-5 text-default mr-4" slot="right" />
		</Input>
		{#if form?.errors?.email}
			{#each form?.errors?.email as message}
				<p class="error">{message}</p>
			{/each}
		{/if}
	</div>

	<div class="w-full p-4">
		<Input
			class="w-full"
			id="password"
			label="Password"
			name="password"
			placeholder="Password"
			required
			type={show ? "text" : "password"}
			value={form?.password ?? ""}
		>
			<Button on:click={() => (show = !show)} slot="right">
				{#if show}
					<EyeLine class="h-5 w-5 text-default" />
				{:else}
					<EyeCloseLine class="h-5 w-5 text-default" />
				{/if}
			</Button>
		</Input>

		{#if form?.errors?.password}
			{#each form?.errors?.password as message}
				<p class="error">{message}</p>
			{/each}
		{/if}
	</div>

	<div class="w-full p-4">
		<Checkbox bind:checked={remember}>Remember me</Checkbox>
	</div>

	<div class="w-full p-4">
		<Button class="btn-primary w-full" type="submit">Login</Button>
	</div>
</form>
