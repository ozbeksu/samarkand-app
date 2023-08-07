<script lang="ts">
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import Content from "$lib/components/Tread/List/Content.svelte";
	import Tags from "$lib/components/Tread/Tags.svelte";
	import Header from "$lib/components/Tread/List/Header.svelte";
	import Footer from "$lib/components/Tread/Footer.svelte";

	export let tread: DTO.Comment | undefined;

	let inCommunityPage = $page?.route?.id?.includes("communities");
</script>

{#if tread?.id}
	<article class={`flex flex-col hover:bg-light-900 dark:hover:bg-dark-900 ${$$props.class ?? ""}`}>
		<div class="w-full">
			<Header
				author={tread?.author}
				community={tread?.community}
				date={tread.created_at}
				listInCommunity={inCommunityPage}
			/>
			<Content
				attachments={tread?.attachments}
				community={tread?.community?.slug}
				content={tread?.content}
				listInCommunity={inCommunityPage}
				slug={tread.slug}
				title={tread.title}
			/>
			<Tags list={tread?.tags} />
			<Footer {tread} />
		</div>
	</article>
{:else}
	<article class={`border-b-secondary ${$$props.class ?? ""}`}>So empty...</article>
{/if}
