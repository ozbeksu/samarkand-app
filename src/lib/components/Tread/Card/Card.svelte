<script lang="ts">
	import type { DTO } from "$lib/types";
	import Content from "$lib/components/Tread/Card/Content.svelte";
	import Header from "$lib/components/Tread/Card/Header.svelte";
	import Tags from "$lib/components/Tread/Tags.svelte";
	import Footer from "$lib/components/Tread/Footer.svelte";
	import Comment from "$lib/components/Comment/Comment.svelte";

	export let showComments = false;
	export let tread: DTO.Comment | null | undefined;
	export let route: string | undefined = undefined;
</script>

{#if tread?.id}
	<article class={`flex flex-col hover:bg-light-900 dark:hover:bg-dark-900 ${$$props.class ?? ""}`}>
		<div class="w-full">
			<Header author={tread?.author} date={tread.created_at} />
			<Content
				attachments={tread?.attachments}
				content={tread.content}
				title={tread.title}
				slug={tread.slug}
				{route}
			/>
			<Tags list={tread?.tags} />
			<Footer {tread} />
		</div>

		{#if showComments && tread?.comments?.length}
			<section class="border-t border-secondary mt-4 pt-4">
				{#each tread.comments as comment}
					<Comment {comment} />
				{/each}
			</section>
		{/if}
	</article>
{:else}
	<article class={`border-b-secondary ${$$props.class ?? ""}`}>So empty...</article>
{/if}
