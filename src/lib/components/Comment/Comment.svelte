<script lang="ts">
	import type { DTO } from "$lib/types";
	import Header from "$lib/components/Comment/Header.svelte";
	import Content from "$lib/components/Comment/Content.svelte";
	import Footer from "$lib/components/Comment/Footer.svelte";

	export let comment: DTO.Comment;
	export let level = 0;
</script>

<article class={`comment flex flex-col my-4 overflow-hidden`}>
	<Header author={comment.author} date={comment.created_at} />
	<div class="ml-4 pl-4">
		<Content content={comment.content} />
		<Footer {comment} />

		{#if comment.comments?.length}
			{#each comment.comments as child}
				<svelte:self comment={child} level={level + 1} />
			{/each}
		{/if}
	</div>
</article>
