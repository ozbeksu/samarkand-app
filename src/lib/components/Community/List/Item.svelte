<script lang="ts">
	import type { DTO } from "$lib/types";
	import Header from "$lib/components/Community/List/Header.svelte";
	import Description from "$lib/components/Community/Description.svelte";
	import Footer from "$lib/components/Community/Footer.svelte";
	import { page } from "$app/stores";

	export let community: DTO.Community | undefined;
</script>

{#if community?.id}
	<article
		class={`border-b hover:bg-light-900 dark:hover:bg-dark-900 ${$$props.class || ""}`}
		class:active={$page.url.pathname.split("/").filter(Boolean).includes(community?.slug)}
	>
		<div class="w-full">
			<Header {community} />
			<Description content={community.description} title={community.title} slug={community.slug} />
			<Footer {community} />
		</div>
	</article>
{:else}
	<article class={`border-b hover:bg-light-900 dark:hover:bg-dark-900 ${$$props.class || ""}`}>
		So empty...
	</article>
{/if}
