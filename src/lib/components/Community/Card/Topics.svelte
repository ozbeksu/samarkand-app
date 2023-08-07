<script lang="ts">
	import type { DTO } from "$lib/types";

	import DiscussLine from "svelte-remixicon/lib/icons/DiscussLine.svelte";

	export let list: DTO.Topic[] | undefined;
</script>

{#if list?.length}
	<div class="p-2 flex items-center">
		{#each list as topic}
			<a
				href={`/topics/${topic.slug}`}
				class="text-secondary inline-flex items-center mr-2 text-sm"
			>
				<DiscussLine class="text-secondary h-5 w-5 mr-1" />
				{topic.name}
			</a>
		{/each}
	</div>
{/if}
