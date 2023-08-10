<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Avatar, CommunityAvatar, Button, Heading, Flex } from "$lib/components";
	import { dateFormat, dateSince } from "$lib/utils/date";

	import DeleteBin2Line from "svelte-remixicon/lib/icons/DeleteBin2Line.svelte";
	import MailCheckLine from "svelte-remixicon/lib/icons/MailCheckLine.svelte";
	import TimeLine from "svelte-remixicon/lib/icons/TimeLine.svelte";
	import CalendarLine from "svelte-remixicon/lib/icons/CalendarLine.svelte";

	export let message: DTO.Message | undefined | null;
</script>

{#if message}
	<Flex class={`p-8 border-b border-brand items-center ${$$props.class ?? ""}`} direction="row">
		{#if message.sender.sender_type === "user"}
			<Avatar class="w-16 h-16" user={message.sender.user} />
			<Flex class="px-4 mr-auto" direction="col">
				<p class="font-semibold">
					{message.sender.user?.profile.first_name}
					{message.sender.user?.profile.last_name}
				</p>
				<p>
					<a href={`/profile/@${message.sender.user?.username}`}>
						@{message.sender.user?.username}
					</a>
				</p>
			</Flex>
		{/if}
		{#if message.sender.sender_type === "community"}
			<CommunityAvatar class="w-16 h-16" imgSrc={message.sender?.community?.avatar?.url} />
			<Flex class="px-4 mr-auto" direction="col">
				<p class="font-semibold text-lg">
					{message.sender?.community?.title}
				</p>
			</Flex>
		{/if}
		<div class="mx-4 flex items-center">
			<TimeLine class="w-4 h-4 inline-flex mr-2" />
			<p>{dateSince(message.sent_at)}</p>
		</div>
		<div class="mx-4 flex items-center">
			<CalendarLine class="w-4 h-4 inline-flex mr-2" />
			<p>{dateFormat(message.sent_at)}</p>
		</div>
		<Button class="btn-blue mr-4 flex items-center" size="sm">
			<MailCheckLine class="w-4 h-4 inline-flex mr-2" />
			Mark As Unread
		</Button>
		<Button class="btn-red-outline flex items-center" size="sm">
			<DeleteBin2Line class="w-4 h-4 inline-flex mr-2" />
			Remove
		</Button>
	</Flex>
	<Flex class={`p-8 border-b border-brand ${$$props.class ?? ""}`} direction="col">
		{#if message.subject}
			<Heading class="text-2xl mb-4" tag="h3">{message.subject}</Heading>
		{/if}
		<p>{@html message.content}</p>
	</Flex>
{/if}
