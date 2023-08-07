<script lang="ts">
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import { Button } from "$lib/components";

	import FlagLine from "svelte-remixicon/lib/icons/FlagLine.svelte";
	import ShareLine from "svelte-remixicon/lib/icons/ShareLine.svelte";
	import UserFollowLine from "svelte-remixicon/lib/icons/UserFollowLine.svelte";

	export let community: DTO.Community | undefined;

	function handleShare() {
		console.log("Share", community);
	}

	function handleReport() {
		console.log("Report", community);
	}
</script>

<div class=" mt-2 flex justify-start">
	{#if $page.data.authUser?.id}
		<div class="inline-flex">
			<Button class="btn-transparent" on:click={handleReport} size="xs">
				<UserFollowLine class="inline-block h-5 w-5" />
				Join
			</Button>
		</div>
	{/if}
	<div class="ml-auto inline-flex">
		<Button class="btn-transparent" on:click={handleShare} size="xs">
			<ShareLine class="mr-2 inline-block h-5 w-5" />
			Share
		</Button>
	</div>
	{#if $page.data.authUser?.id}
		<div class=" inline-flex">
			<Button class="btn-transparent" on:click={handleReport} size="xs">
				<FlagLine class="inline-block h-5 w-5" />
				Report
			</Button>
		</div>
	{/if}
</div>
