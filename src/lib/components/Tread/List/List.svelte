<script lang="ts">
	import type { DTO } from "$lib/types";
	import Item from "$lib/components/Tread/List/Item.svelte";

	export let list: DTO.Comment[] | null | undefined;
</script>

{#if list?.length}
	{#each list as tread}
		<Item {tread} class={`p-8 border-brand border-r ${$$props.class ?? ""}`} />
	{/each}
{/if}
