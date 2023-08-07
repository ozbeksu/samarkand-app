<script lang="ts">
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import { Heading } from "$lib/components";
	import Media from "$lib/components/Tread/List/Media.svelte";

	export let title: string;
	export let slug: string;

	export let attachments: DTO.Attachment[] | undefined;
	export let content: DTO.Post | DTO.Poll;
	let path: string | undefined = $page.url.pathname
		.split("/")
		.slice(0, -1)
		.filter(Boolean)
		.join("/");

	let route: string | undefined = path?.length > 0 ? path : "comments";
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
