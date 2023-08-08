<script lang="ts">
	import type { PageData } from "./$types";
	import ListLayout from "$lib/layouts/ListLayout.svelte";
	import { CommunityList, CommunityCard } from "$lib/components";

	export let data: PageData;
</script>

<ListLayout>
	<CommunityList list={data.list} slot="list" />

	<CommunityCard community={data?.list?.length ? data?.list[0] : null} slot="details" />
</ListLayout>
