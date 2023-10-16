<script lang="ts">
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import { Avatar, Button, Flex } from "$lib/components";
	import { dateSince } from "$lib/utils/date";

	import DeleteBin2Line from "svelte-remixicon/lib/icons/DeleteBin2Line.svelte";
	import MailCheckLine from "svelte-remixicon/lib/icons/MailCheckLine.svelte";
	import TimeLine from "svelte-remixicon/lib/icons/TimeLine.svelte";

	export let user: DTO.User | undefined | null;
	export let messages: DTO.Message[] | undefined | null;
</script>

<Flex class="bg-light-700 dark:bg-dark-700 h-full">
	<Flex
		class={`p-8 border-b bg-light-800 dark:bg-dark-800 border-brand items-center ${
			$$props.class ?? ""
		}`}
		direction="row"
	>
		<Avatar class="w-16 h-16" {user} />
		<Flex class="px-4 mr-auto" direction="col">
			<p class="font-semibold">
				{user?.profile?.first_name}
				{user?.profile?.last_name}
			</p>
			<p>@{user?.username}</p>
		</Flex>
		<Button class="btn-blue mr-4 flex items-center" size="sm">
			<MailCheckLine class="w-4 h-4 inline-flex mr-2" />
			Mark As Read
		</Button>
		<Button class="btn-red-outline flex items-center" size="sm">
			<DeleteBin2Line class="w-5 h-5 inline-flex" />
		</Button>
	</Flex>

	{#if messages?.length}
		<Flex class="m-8">
			{#each messages as message}
				<Flex class="items-start mb-4">
					<Flex
						class={message.sender.user_id === $page.data.authUser?.id
							? "!flex-row-reverse"
							: "!flex-row"}
					>
						{#if message.sender.user_id !== $page.data.authUser?.id}
							<Flex class="message-received">
								{@html message.content}
							</Flex>
						{:else}
							<Flex class="message-sent">
								{@html message.content}
							</Flex>
						{/if}
					</Flex>
					<div
						class={message.sender.user_id === $page.data.authUser?.id
							? "flex w-full flex-row-reverse"
							: "flex w-full flex-row"}
					>
						<Flex class="mt-2 items-center" direction="row">
							<TimeLine class="w-4 h-4 inline-flex mr-2" />
							<p>{dateSince(message.sender.sent_at)}</p>
						</Flex>
					</div>
				</Flex>
			{/each}
		</Flex>
	{/if}
</Flex>
