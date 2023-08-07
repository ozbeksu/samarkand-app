<script lang="ts">
	import type { UI } from "$lib/types";
	import { page } from "$app/stores";

	export let links: UI.Link[];
	export let linkMargin = "mx-6";
</script>

{#if links?.length}
	<div class={`inner-header center flex pb-6 pt-10  ${$$props.class}`}>
		<ul class="justify-center list-none">
			{#each links as link}
				<a
					href={link.url}
					class={`link-tab ${linkMargin}`}
					class:active={$page.params?.feed === link.url}
				>
					{#if link.icon}
						<svelte:component this={link.icon} class="mx-2 inline-block h-8 w-8 " />
					{/if}
					{#if link.name}
						{link.name}
					{/if}
				</a>
			{/each}
		</ul>
	</div>
{/if}
