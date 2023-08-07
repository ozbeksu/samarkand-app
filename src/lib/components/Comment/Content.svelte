<script lang="ts">
	import type { DTO } from "$lib/types";

	export let content: DTO.Post | DTO.Poll;
</script>

{#if content}
	<div class="m-4">
		{#if content.type === "post"}
			<div class="text-default">
				{@html content.body}
			</div>
		{/if}
	</div>
{/if}
