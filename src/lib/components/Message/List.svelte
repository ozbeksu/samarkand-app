<script lang="ts">
	import type { DTO } from "$lib/types";
	import Item from "$lib/components/Message/Item.svelte";

	export let list: DTO.Message[] | undefined | null;
</script>

{#if list?.length}
	<div>
		{#each list as message}
			<Item {message} />
		{/each}
	</div>
{/if}
