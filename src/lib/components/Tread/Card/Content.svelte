<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Heading } from "$lib/components";
	import Media from "$lib/components/Tread/Card/Media.svelte";

	export let title: string;
	export let slug: string;
	export let route: string | undefined = undefined;
	export let content: DTO.Post | DTO.Poll;
	export let attachments: DTO.Attachment[] | undefined;
</script>

<Heading class="text-xl font-bold p-0 mt-3" tag="h4">
	{#if route}
		<a class="text-default" href={`${route}/${slug}`}>{title}</a>
	{:else}
		<a class="text-default" href={`/comments/${slug}`}>{title}</a>
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
