<script lang="ts">
	import type { DTO } from "$lib/types";
	import Item from "$lib/components/Contact/Item.svelte";

	export let list: DTO.User[] | undefined;
</script>

{#if list?.length}
	<div>
		{#each list as user}
			<Item {user} />
		{/each}
	</div>
{/if}
