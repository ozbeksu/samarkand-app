<script lang="ts">
	import { page } from "$app/stores";
	import { Avatar, ThemeSwitcher } from "$lib/components";
	import { iconBarLinks } from "$lib/links";

	import Settings5Line from "svelte-remixicon/lib/icons/Settings5Line.svelte";
	import LogoutBoxLine from "svelte-remixicon/lib/icons/LogoutBoxLine.svelte";
	import LoginBoxLine from "svelte-remixicon/lib/icons/LoginBoxLine.svelte";
</script>

<ul class="center w-full flex flex-col list-none mt-2">
	{#each iconBarLinks($page.data.authUser?.username) as link}
		{#if link.protected}
			{#if $page.data.authUser?.id}
				<li class="mt-4">
					<a class="link-icon" href={link.url} class:active={$page.url.pathname === link.url}>
						<svelte:component this={link.icon} class="h-6 w-6 text-white" />
					</a>
				</li>
			{/if}
		{:else}
			<li class="mt-4">
				<a class="link-icon" href={link.url} class:active={$page.url.pathname === link.url}>
					<svelte:component this={link.icon} class="h-6 w-6 text-white" />
				</a>
			</li>
		{/if}
	{/each}
</ul>

<ul class="center w-full flex flex-col list-none">
	<li class="mt-4">
		<ThemeSwitcher />
	</li>
	{#if $page.data.authUser?.id}
		<li class="mt-4">
			<a class="link-icon" class:active={$page.url.pathname === "/settings"} href="/settings">
				<Settings5Line class="h-6 w-6 text-white" />
			</a>
		</li>
		<li class="mt-4">
			<a class="link-icon" class:active={$page.url.pathname === "/logout"} href="/logout">
				<LogoutBoxLine class="h-6 w-6 text-white" />
			</a>
		</li>
	{/if}
	{#if $page.data.authUser}
		<li class="mt-4">
			<a
				class="link-icon"
				href={`/profile/@${$page.data.authUser.username}`}
				class:active={$page.url.pathname === `/profile/@${$page.data.authUser.username}`}
			>
				<Avatar class="h-8 w-8" user={$page.data.authUser} />
			</a>
		</li>
	{:else}
		<li class="mt-4">
			<a class="link-icon" class:active={$page.url.pathname === "/login"} href="/login">
				<LoginBoxLine class="h-6 w-6 text-white" />
			</a>
		</li>
	{/if}
</ul>
