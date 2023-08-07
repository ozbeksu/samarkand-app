<script lang="ts">
	import type { DTO } from "$lib/types";
	import Item from "$lib/components/Community/List/Item.svelte";

	export let list: DTO.Community[] | null | undefined;
</script>

{#if list?.length}
	{#each list as item}
		<Item community={item} class="p-8 border-r border-brand" />
	{/each}
{/if}
