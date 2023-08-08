<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Carousel } from "$lib/components";

	export let attachments: DTO.Attachment[] | undefined;
</script>

{#if attachments?.length}
	<div class="my-4 -ml-8 -mr-8">
		{#if attachments.length > 1}
			<Carousel list={attachments} />
		{:else}
			<img class="w-full" src={attachments[0].url} alt={attachments[0].file_name} />
		{/if}
	</div>
{/if}
