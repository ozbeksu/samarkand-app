<script lang="ts">
	import type { CommentPageData } from "$lib/types";
	import ListLayout from "$lib/layouts/ListLayout.svelte";
	import { TreadList, TreadCard } from "$lib/components";

	export let data: CommentPageData;
</script>

<ListLayout>
	<svelte:fragment slot="list">
		<TreadList list={data?.list} />
	</svelte:fragment>

	<TreadCard class="px-8 pt-12" showComments slot="details" tread={data.current} />
</ListLayout>
