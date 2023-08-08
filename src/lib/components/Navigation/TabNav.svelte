<script lang="ts">
	import type { UI } from "$lib/types";
	import { page } from "$app/stores";

	import ArrowGoBackLine from "svelte-remixicon/lib/icons/ArrowGoBackLine.svelte";

	export let links: UI.Link[];
	export let linkMargin = "mx-6";
	export let showBack = false;
</script>

{#if showBack}
	<div class={`inner-header center flex pb-6 pt-10  ${$$props.class ?? ""}`}>
		<button class={`link-tab link-primary ${linkMargin}`} on:click={() => history.back()}>
			<ArrowGoBackLine class="mx-2 inline-block h-8 w-8" />
			Back
		</button>
	</div>
{/if}

{#if links?.length}
	<div class={`inner-header center flex pb-6 pt-10  ${$$props.class ?? ""}`}>
		<ul class="justify-center list-none">
			{#each links as link}
				<li class="inline-flex">
					<a
						href={link.url}
						class={`link-tab ${linkMargin}`}
						class:active={$page.url.href.includes(link.url)}
					>
						{#if link.icon}
							<svelte:component this={link.icon} class="mx-2 inline-block h-8 w-8" />
						{/if}
						{#if link.name}
							{link.name}
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
