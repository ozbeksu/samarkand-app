<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Heading } from "$lib/components";
	import Media from "$lib/components/Tread/List/Media.svelte";

	export let attachments: DTO.Attachment[] | undefined;
	export let community: string;
	export let content: DTO.Post | DTO.Poll;
	export let listInCommunity: boolean | undefined;
	export let slug: string;
	export let title: string;

	let route = listInCommunity ? `communities/${community}/comments` : "comments";
</script>

<Heading class="text-xl font-bold p-0 mt-3" tag="h4">
	<a class="text-default" href={`/${route}/${slug}`}>{title}</a>
</Heading>

{#if attachments?.length}
	<Media {attachments} />
{/if}

{#if content}
	<div class="mb-4 mt-4">
		{#if content.type === "post"}
			<div class="text-default">
				{@html content.body}
			</div>
		{/if}
	</div>
{/if}
