<script lang="ts">
	import type { DTO } from "$lib/types";
	import Item from "$lib/components/Contact/Item.svelte";

	export let list: DTO.User[] | null | undefined;
</script>

{#if list?.length}
	{#each list as user}
		<Item {user} />
	{/each}
{/if}
