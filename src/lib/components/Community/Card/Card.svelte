<script lang="ts">
	import type { DTO } from "$lib/types";
	import { TreadCard } from "$lib/components";
	import Header from "$lib/components/Community/Card/Header.svelte";
	import Description from "$lib/components/Community/Description.svelte";
	import Topics from "$lib/components/Community/Card/Topics.svelte";

	export let community: DTO.Community | null | undefined;
</script>

{#if community?.id}
	<article class={`border-b border-light-800 dark:border-dark-800 ${$$props.class || ""}`}>
		<Header {community} />
		<div class="w-full px-8">
			<Description content={community.description} title={community.title} slug={community.slug} />
			<Topics list={community.topics} />
		</div>

		{#if community?.comments?.length}
			<section class="border-t border-secondary mt-4 grid grid-cols-2">
				{#each community.comments as comment}
					<div class="border-r border-b border-brand">
						<TreadCard
							tread={comment}
							class="p-8"
							route={`/communities/${community.slug}/comments`}
						/>
					</div>
				{/each}
			</section>
		{/if}
	</article>
{:else}
	<article class={`border-b border-light-800 dark:border-dark-800 ${$$props.class || ""}`}>
		So empty...
	</article>
{/if}
