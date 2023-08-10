<script lang="ts">
	import { afterUpdate } from "svelte";
	import { page } from "$app/stores";
	import IconBar from "$lib/partials/IconBar.svelte";
	import SideBar from "$lib/partials/SideBar.svelte";
	import { Trends, Follows } from "$lib/components";

	let sideBar: HTMLDivElement;
	let hasScroll = false;

	afterUpdate(() => {
		hasScroll = sideBar.scrollHeight > sideBar.clientHeight;
	});
</script>

<svelte:head>
	<title>Home - Samarkand</title>
</svelte:head>

<div class="icon-bar-col">
	<IconBar />
</div>

<div bind:this={sideBar} class="sidebar-col" class:no-scroll={!hasScroll}>
	<SideBar>
		<slot name="sidebar">
			{#if $page.data.tags?.length}
				<Trends tags={$page.data.tags} />
			{/if}

			{#if $page.data.users?.length}
				<Follows users={$page.data.users} />
			{/if}
		</slot>
	</SideBar>
</div>

<slot />
