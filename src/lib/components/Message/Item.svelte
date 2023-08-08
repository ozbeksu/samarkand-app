<script lang="ts">
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import { Avatar, Flex } from "$lib/components";

	import MailCheckLine from "svelte-remixicon/lib/icons/MailCheckLine.svelte";

	export let message: DTO.Message | undefined;
</script>

{#if message}
	<Flex class="p-8 border-b border-brand">
		<Flex class="items-center" direction="row">
			<Avatar class="w-16 h-16" user={message.sender} />
			<Flex class="px-4 mr-auto" direction="col">
				<p class="font-semibold">
					{message.sender?.profile.first_name}
					{message.sender?.profile.last_name}
				</p>
				<p>@{message.sender?.username}</p>
			</Flex>

			<a
				class="btn btn-green-outline btn-sm mr-4 flex items-center"
				href={`/profile/@${$page.params.username}/messages/${message.id}`}
			>
				<MailCheckLine class="w-4 h-4 inline-flex mr-2" />
				Read
			</a>
		</Flex>
		<p class="pt-2">Subject: <span class="font-semibold">{message.subject}</span></p>
	</Flex>
{/if}
