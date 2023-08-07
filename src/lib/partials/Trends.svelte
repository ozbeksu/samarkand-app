<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Heading } from "$lib/components";

	import Hashtag from "svelte-remixicon/lib/icons/Hashtag.svelte";

	export let tags: DTO.Tag[];
</script>

<div class="my-4">
	<Heading class="p-4 border-brand border-b text-default text-xl font-bold" tag="h4">
		<Hashtag class="text-default mx-2 inline-block h-6 w-6" />
		Trends for you
	</Heading>
	<ul class="list-none border-brand border-b">
		{#each tags as tag}
			<li class="p-4">
				<a href={`/tags/${tag.name}`} class="text-md text-default font-bold">
					#{tag.name}
				</a>
				<p>{tag?.comments?.length ?? 0} Comments</p>
			</li>
		{:else}
			<li class="py-4">
				<p>Nothing yet!</p>
			</li>
		{/each}
	</ul>
</div>
