<script lang="ts">
	import type { PageData } from "./$types";
	import ListLayout from "$lib/layouts/ListLayout.svelte";
	import { TreadList, TreadCard, TabNav } from "$lib/components";
	import { listTabLinks } from "$lib/links";

	export let data: PageData;
</script>

<ListLayout>
	<svelte:fragment slot="list">
		<TabNav class="backdrop-blur-sm border-b border-opaque" links={listTabLinks} />
		<TreadList list={data?.list} route="/comments" />
	</svelte:fragment>

	<TreadCard
		class="px-8 pt-12"
		showComments
		slot="details"
		tread={data?.list?.length ? data?.list[0] : null}
	/>
</ListLayout>
