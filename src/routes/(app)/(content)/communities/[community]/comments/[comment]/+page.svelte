<script lang="ts">
	import type { CommentPageData } from "$lib/types";
	import ListLayout from "$lib/layouts/ListLayout.svelte";
	import { TreadList, TreadCard, TabNav } from "$lib/components";
	import { listTabLinks } from "$lib/links";

	export let data: CommentPageData;
</script>

<ListLayout>
	<svelte:fragment slot="list">
		<TabNav links={listTabLinks} showBack />
		<TreadList list={data?.list} />
	</svelte:fragment>

	<TreadCard class="px-8 pt-12" showComments slot="details" tread={data.current} />
</ListLayout>
