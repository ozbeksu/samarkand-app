<script lang="ts">
	import type { DTO } from "$lib/types";
	import Header from "$lib/components/Community/Card/Header.svelte";
	import Description from "$lib/components/Community/Description.svelte";
	import Topics from "$lib/components/Community/Card/Topics.svelte";
	import { TreadList } from "$lib/components";

	export let community: DTO.Community | null | undefined;
	export let showComments: boolean | null | undefined = false;
</script>

{#if community?.id}
	<article class={`border-b border-light-800 dark:border-dark-800 ${$$props.class ?? ""}`}>
		<Header {community} />
		<div class="w-full px-8 pb-8">
			<Description content={community.description} title={community.title} slug={community.slug} />
			<Topics list={community.topics} />
		</div>

		{#if showComments && community?.comments?.length}
			<section class="border-t border-secondary mt-4 tread-list">
				<TreadList
					class="border-b"
					list={community.comments}
					route={`/communities/${community.slug}/comments`}
				/>
			</section>
		{/if}
	</article>
{:else}
	<article class={`border-b border-light-800 dark:border-dark-800 ${$$props.class || ""}`}>
		So empty...
	</article>
{/if}
