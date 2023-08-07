<script lang="ts">
	import type { DTO } from "$lib/types";

	export let list: DTO.Tag[] | undefined;
</script>

{#if list?.length}
	<div class="mr-auto py-2">
		{#each list as tag}
			<a href={`/tags/${tag.slug}`} class="text-secondary mr-2">
				#{tag.name}
			</a>
		{/each}
	</div>
{/if}
