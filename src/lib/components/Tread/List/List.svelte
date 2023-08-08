<script lang="ts">
	import type { DTO } from "$lib/types";
	import Item from "$lib/components/Tread/List/Item.svelte";
	import Empty from "$lib/components/Empty.svelte";

	export let list: DTO.Comment[] | null | undefined;
	export let route: string | null | undefined;
</script>

{#if list?.length}
	{#each list as tread}
		<Item {tread} {route} class={`p-8 border-brand border-r ${$$props.class ?? ""}`} />
	{/each}
{:else}
	<Empty message="You haven't created anything, yet." />
{/if}
