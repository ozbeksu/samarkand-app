<script lang="ts">
	import type { DTO } from "$lib/types";
	import Avatar from "$lib/components/Avatar.svelte";
	import { dateSince } from "$lib/utils/date";

	import CalendarLine from "svelte-remixicon/lib/icons/CalendarLine.svelte";

	export let author: DTO.User | undefined;
	export let date: Date;
</script>

<div class="flex flex-wrap items-center">
	{#if author?.id}
		<div class="mx-1">
			<Avatar
				class="bg-transparent dark:bg-transparent w-8 h-8"
				href={`/profile/@${author.username}`}
				user={author}
			/>
		</div>
		<div class="mx-1">
			<a class="text-default" href={`/profile/@${author.username}`}>
				{author.username}
			</a>
		</div>
	{/if}
	<div class="ml-auto text-sm">
		<CalendarLine class="text-secondary inline-block" />
		<time class="text-secondary text-right" datetime={date.toString()}>{dateSince(date)}</time>
	</div>
</div>
