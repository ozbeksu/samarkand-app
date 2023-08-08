<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Avatar, Button, Heading, Flex } from "$lib/components";
	import { dateFormat, dateSince } from "$lib/utils/date";

	import DeleteBin2Line from "svelte-remixicon/lib/icons/DeleteBin2Line.svelte";
	import MailCheckLine from "svelte-remixicon/lib/icons/MailCheckLine.svelte";
	import TimeLine from "svelte-remixicon/lib/icons/TimeLine.svelte";
	import CalendarLine from "svelte-remixicon/lib/icons/CalendarLine.svelte";

	export let message: DTO.Message | undefined | null;
</script>

{#if message}
	<Flex class={`p-8 border-b border-brand items-center ${$$props.class ?? ""}`} direction="row">
		<Avatar class="w-16 h-16" user={message.sender} />
		<Flex class="px-4 mr-auto" direction="col">
			<p class="font-semibold">
				{message.sender?.profile.first_name}
				{message.sender?.profile.last_name}
			</p>
			<p>@{message.sender?.username}</p>
		</Flex>
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
		<Heading class="text-2xl mb-4" tag="h3">{message.body}</Heading>
		<p>{message.body}</p>
	</Flex>
{/if}
