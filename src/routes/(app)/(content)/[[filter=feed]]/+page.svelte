<script lang="ts">
	import type { ListLayoutData } from "$lib/types";
	import ListLayout from "$lib/layouts/ListLayout.svelte";
	import { TreadList, TreadCard, TabNav } from "$lib/components";
	import { listTabLinks } from "$lib/links";

	export let data: ListLayoutData;
</script>

<ListLayout>
	<svelte:fragment slot="list">
		<TabNav links={listTabLinks} />
		<TreadList list={data?.list} />
	</svelte:fragment>
	
	<TreadCard
		class="px-8 pt-12"
		showComments
		slot="details"
		tread={data?.list?.length ? data?.list[0] : null}
	/>
</ListLayout>
