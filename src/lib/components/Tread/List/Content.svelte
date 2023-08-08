<script lang="ts">
	import type { DTO } from "$lib/types";
	import { beforeUpdate } from "svelte";
	import { page } from "$app/stores";
	import { Heading } from "$lib/components";
	import Media from "$lib/components/Tread/List/Media.svelte";

	export let attachments: DTO.Attachment[] | undefined;
	export let content: DTO.Post | DTO.Poll;
	export let route: string | null | undefined = "/comments";
	export let slug: string;
	export let title: string;

	let feed: string | null | undefined;

	beforeUpdate(() => {
		feed = $page.url.searchParams.get("feed");
	});
</script>

<Heading class="text-xl font-bold p-0 mt-3" tag="h4">
	{#if feed}
		<a class="text-default" href={`${route}/${slug}?feed=${feed}`}>{title}</a>
	{:else}
		<a class="text-default" href={`${route}/${slug}`}>{title}</a>
	{/if}
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
