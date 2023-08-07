<script lang="ts">
	import { Heading } from "$lib/components";

	export let title: string;
	export let slug: string;
	export let content: string;
	export let showHeading = false;
</script>

{#if showHeading}
	<Heading customSize="text-xl font-bold p-0 mt-3" tag="h4">
		<a class="text-default" href={`/communities/${slug}`}>{title}</a>
	</Heading>
{/if}

<div class="my-8">
	<div class="text-default">
		{@html content}
	</div>
</div>
