<script lang="ts">
	import type { DTO } from "$lib/types";

	export let cover: DTO.Attachment | undefined;
	export let scrolling: boolean | undefined;
	export let bgColor: string | undefined;
</script>

{#if cover}
	<div
		class={`profile-cover border-b border-brand ${scrolling ? "shrink" : ""}`}
		style:background-image={`url(${cover.url})`}
	/>
{:else}
	<div
		class={`profile-cover border-b border-brand ${scrolling ? "shrink" : ""}`}
		style:background-color={bgColor}
	/>
{/if}
