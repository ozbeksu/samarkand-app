<script lang="ts">
	import type { DTO } from "$lib/types";
	import Content from "$lib/components/Tread/List/Content.svelte";
	import Tags from "$lib/components/Tread/Tags.svelte";
	import Header from "$lib/components/Tread/List/Header.svelte";
	import Footer from "$lib/components/Tread/Footer.svelte";

	export let tread: DTO.Comment | undefined;
</script>

{#if tread?.id}
	<article class={`flex flex-col hover:bg-light-900 dark:hover:bg-dark-900 ${$$props.class ?? ""}`}>
		<div class="w-full">
			<Header author={tread?.author} community={tread?.community} date={tread.created_at} />
			<Content
				attachments={tread?.attachments}
				content={tread?.content}
				title={tread.title}
				slug={tread.slug}
			/>
			<Tags list={tread?.tags} />
			<Footer {tread} />
		</div>
	</article>
{:else}
	<article class={`${$$props.class ?? ""} border-b-secondary`}>So empty...</article>
{/if}
