<script lang="ts">
	import type { DTO } from "$lib/types";
	import { CommunityAvatar } from "$lib/components";
	import { dateSince } from "$lib/utils/date";

	import CalendarLine from "svelte-remixicon/lib/icons/CalendarLine.svelte";

	export let community: DTO.Community | undefined;
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
		<div class="ml-auto text-sm">
			<CalendarLine class="text-secondary inline-block" />
			<time class="text-secondary text-right" datetime={community.created_at.toString()}>
				{dateSince(community.created_at)}
			</time>
		</div>
	{/if}
</div>
