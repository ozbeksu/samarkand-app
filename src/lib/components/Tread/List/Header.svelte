<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Avatar, CommunityAvatar } from "$lib/components";
	import { dateSince } from "$lib/utils/date";

	import CalendarLine from "svelte-remixicon/lib/icons/CalendarLine.svelte";

	export let community: DTO.Community | undefined;
	export let author: DTO.User | undefined;
	export let date: Date;
</script>

<div class="flex flex-wrap items-center">
	{#if community?.id}
		{#if community?.avatar}
			<div class="mx-1">
				<CommunityAvatar class="p-2 w-10 h-10" imgSrc={community.avatar.url} />
			</div>
		{/if}
		<div class="mx-1">
			<a class="text-default font-bold" href={`/communities/${community.slug}`}>
				{community.title}
			</a>
		</div>
		{#if author?.id}
			<div class="mx-1">
				<span class="text-secondary text-sm font-normal">Posted by</span>
			</div>
		{/if}
	{:else if author?.id}
		<div class="mx-1">
			<Avatar class="w-12 h-12" href={`/profile/@${author.username}`} user={author} />
		</div>
	{/if}
	{#if author?.id}
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
