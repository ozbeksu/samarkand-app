<script lang="ts">
	import type { PageData } from "./$types";
	import ListLayout from "$lib/layouts/ListLayout.svelte";
	import { CommunityCard, TreadCard, TreadList } from "$lib/components";

	export let data: PageData;
</script>

<ListLayout>
	<svelte:fragment slot="list">
		<CommunityCard community={data?.community} slot="details" />
		<TreadList list={data?.list} route={`/communities/${data?.community?.slug}/comments`} />
	</svelte:fragment>
	<TreadCard class="px-8 pt-12" showComments slot="details" tread={data?.current} />
</ListLayout>
