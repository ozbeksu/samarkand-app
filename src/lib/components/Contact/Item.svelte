<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Avatar, Button, Flex } from "$lib/components";

	import DeleteBin2Line from "svelte-remixicon/lib/icons/DeleteBin2Line.svelte";
	import Chat1Fill from "svelte-remixicon/lib/icons/Chat1Fill.svelte";

	export let user: DTO.User | undefined;
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
	<Button class="btn-blue-outline mr-4 flex items-center" size="sm">
		<Chat1Fill class="w-4 h-4 inline-flex mr-2" />
		Chat
	</Button>
	<Button class="btn-red-outline flex items-center" size="sm">
		<DeleteBin2Line class="w-4 h-4 inline-flex mr-2" />
		Remove
	</Button>
</Flex>
