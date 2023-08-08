<script lang="ts">
	import type { CommunityListLayoutData } from "$lib/types";
	import ListLayout from "$lib/layouts/ListLayout.svelte";
	import { CommunityList, CommunityCard } from "$lib/components";

	export let data: CommunityListLayoutData;
</script>

<ListLayout>
	<CommunityList list={data.list} slot="list" />
	<CommunityCard community={data?.current} showComments slot="details" />
</ListLayout>
