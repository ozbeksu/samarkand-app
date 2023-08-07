<script lang="ts">
	import type { CommunityPageData } from "$lib/types";
	import ListLayout from "$lib/layouts/ListLayout.svelte";
	import { CommunityCard, CommunityList } from "$lib/components";

	export let data: CommunityPageData;
</script>

<ListLayout>
	<svelte:fragment slot="list">
		<CommunityList list={data.list} />
	</svelte:fragment>
	
	<CommunityCard community={data?.current} slot="details" />
</ListLayout>
