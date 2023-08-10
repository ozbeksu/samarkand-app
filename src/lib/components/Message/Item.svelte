<script lang="ts">
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import { Avatar, CommunityAvatar, Flex } from "$lib/components";
	import { dateFormat, dateSince } from "$lib/utils/date";

	import MailUnreadLine from "svelte-remixicon/lib/icons/MailUnreadLine.svelte";
	import MailOpenLine from "svelte-remixicon/lib/icons/MailOpenLine.svelte";
	import TimeLine from "svelte-remixicon/lib/icons/TimeLine.svelte";
	import CalendarLine from "svelte-remixicon/lib/icons/CalendarLine.svelte";
	import { beforeUpdate } from "svelte";

	export let message: DTO.Message | undefined;

	let tab: string | null | undefined;

	beforeUpdate(() => {
		tab = $page.url.searchParams.get("tab");
	});
</script>

{#if message}
	<Flex class="border-b border-brand">
		<Flex class="p-8 items-center" direction="row">
			{#if message.sender.type === "user"}
				<Avatar class="w-16 h-16" user={message.sender.user} />
				<Flex class="px-4 mr-auto" direction="col">
					<p class="font-semibold">
						{message.sender.user?.profile.first_name}
						{message.sender.user?.profile.last_name}
					</p>
					<p>@{message.sender.user?.username}</p>
				</Flex>
			{/if}
			{#if message.sender.type === "community"}
				<CommunityAvatar class="w-16 h-16" imgSrc={message.sender?.community?.avatar?.url} />
				<Flex class="px-4 mr-auto" direction="col">
					{#if tab}
						<a
							class="font-semibold"
							href={`/communities/${message.sender?.community?.slug}?tab=${tab}`}
						>
							{message.sender?.community?.title}
						</a>
					{:else}
						<a class="font-semibold" href={`/communities/${message.sender?.community?.slug}`}>
							{message.sender?.community?.title}
						</a>
					{/if}
				</Flex>
			{/if}

			{#if tab}
				<a
					class="btn btn-green-outline btn-sm mr-4 flex items-center"
					href={`/profile/@${$page.params.username}/messages/${message.slug}?tab=${tab}`}
				>
					<MailOpenLine class="w-4 h-4 inline-flex mr-2" />
					Read
				</a>
			{:else}
				<a
					class="btn btn-green-outline btn-sm mr-4 flex items-center"
					href={`/profile/@${$page.params.username}/messages/${message.slug}`}
				>
					<MailOpenLine class="w-4 h-4 inline-flex mr-2" />
					Read
				</a>
			{/if}
		</Flex>
		<Flex class="py-4 px-8 items-center border-t border-brand" direction="row">
			<div class="ml-2 flex items-center mr-auto">
				<MailUnreadLine class="w-4 h-4 inline-flex mr-2" />
				<p class="font-semibold truncate">{message.subject}</p>
			</div>
			<div class="mr-4 flex items-center text-sm">
				<TimeLine class="w-4 h-4 inline-flex mr-2" />
				<p>{dateSince(message.sender.sent_at)}</p>
			</div>
			<div class="flex items-center text-sm">
				<CalendarLine class="w-4 h-4 inline-flex mr-2" />
				<p>{dateFormat(message.sender.sent_at)}</p>
			</div>
		</Flex>
	</Flex>
{/if}
