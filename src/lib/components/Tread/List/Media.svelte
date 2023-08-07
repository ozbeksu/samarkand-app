<script lang="ts">
	import type { DTO } from "$lib/types";

	export let attachments: DTO.Attachment[] | undefined;
</script>

{#if attachments?.length}
	<div
		class={`my-4 -ml-8 -mr-8 h-96 flex items-end overflow-hidden bg-no-repeat bg-cover bg-top ${
			$$props.class ?? ""
		}`}
		style:background-image={`url(${attachments[0].url})`}
	>
		<div class="post-image-shade h-32 w-full" />
	</div>
{/if}
