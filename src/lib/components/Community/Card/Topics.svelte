<script lang="ts">
	import type { DTO } from "$lib/types";

	import Inbox2Line from "svelte-remixicon/lib/icons/Inbox2Line.svelte";

	export let list: DTO.Topic[] | undefined;
</script>

{#if list?.length}
	<div class="p-2 flex items-center">
		{#each list as topic}
			<a
				href={`/topics/${topic.slug}`}
				class="text-secondary inline-flex items-center mr-2 text-sm"
			>
				<Inbox2Line class="text-secondary h-5 w-5 mr-1" />
				{topic.name}
			</a>
		{/each}
	</div>
{/if}
