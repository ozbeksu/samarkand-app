<script lang="ts">
	import type { DTO } from "$lib/types";

	export let attachments: DTO.Attachment[] | undefined;
</script>

{#if attachments?.length}
	<div class="my-4 -ml-8 -mr-8">
		{#each attachments as attachment}
			<img class="w-full" src={attachment.url} alt={attachment.file_name} />
		{/each}
	</div>
{/if}
