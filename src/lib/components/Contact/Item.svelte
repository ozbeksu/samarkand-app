<script lang="ts">
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import { Avatar, Button, Flex } from "$lib/components";

	import DeleteBin2Line from "svelte-remixicon/lib/icons/DeleteBin2Line.svelte";
	import Chat1Line from "svelte-remixicon/lib/icons/Chat1Line.svelte";
	import { beforeUpdate } from "svelte";

	export let user: DTO.User | undefined;

	let tab: string | null | undefined;

	beforeUpdate(() => {
		tab = $page.url.searchParams.get("tab");
	});
</script>

<Flex class="p-8 border-b border-brand items-center" direction="row">
	<Avatar class="w-16 h-16" {user} />
	<Flex class="px-4 mr-auto" direction="col">
		<p class="font-semibold">
			{user?.profile?.first_name}
			{user?.profile?.last_name}
		</p>
		<p>@{user?.username}</p>
	</Flex>
	{#if tab}
		<a
			class="btn btn-blue-outline btn-sm mr-4 flex items-center"
			href={`/profile/@${$page.data.authUser.username}/connections/${user?.username}?tab=${tab}`}
		>
			<Chat1Line class="w-4 h-4 inline-flex mr-2" />
			Chat
		</a>
	{:else}
		<a
			class="btn btn-blue-outline btn-sm mr-4 flex items-center"
			href={`/profile/@${$page.data.authUser.username}/connections/${user?.username}`}
		>
			<Chat1Line class="w-4 h-4 inline-flex mr-2" />
			Chat
		</a>
	{/if}
	<Button class="btn-red-outline flex items-center" size="sm">
		<DeleteBin2Line class="w-5 h-5 inline-flex" />
	</Button>
</Flex>
