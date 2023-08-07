<script lang="ts">
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import { Button, CommunityAvatar } from "$lib/components";
	import { dateSince } from "$lib/utils/date";

	import FlagLine from "svelte-remixicon/lib/icons/FlagLine.svelte";
	import ShareLine from "svelte-remixicon/lib/icons/ShareLine.svelte";
	import UserFollowLine from "svelte-remixicon/lib/icons/UserFollowLine.svelte";
	import CalendarLine from "svelte-remixicon/lib/icons/CalendarLine.svelte";

	export let community: DTO.Community | undefined;

	function handleShare() {
		console.log("Share", community);
	}

	function handleReport() {
		console.log("Report", community);
	}
</script>

{#if community?.id}
	<div
		class="h-80 w-full bg-center bg-cover bg-no-repeat flex items-end"
		style:background-image={`url(${community?.cover?.url})`}
	>
		<div
			class="flex items-end w-full bg-gradient-to-t h-48 from-20% from-light-800 dark:from-dark-800"
		>
			<div class="flex px-4 w-full justify-center items-center">
				{#if community?.avatar}
					<div class="mx-1 flex items-center text-default font-bold text-2xl p-4">
						<CommunityAvatar class="w-12 h-12 mr-4" imgSrc={community.avatar.url} />
						{community.title}
					</div>
				{/if}
				{#if $page.data.authUser?.id}
					<div class="inline-flex p-4">
						<Button class="text-default" on:click={handleReport}>
							<UserFollowLine class="inline-block h-5 w-5" />
							Join
						</Button>
					</div>
				{/if}
				<div class="ml-auto inline-flex mr-4">
					<Button class="text-default" on:click={handleShare} size="xs">
						<ShareLine class="mr-2 inline-block h-5 w-5" />
						Share
					</Button>
				</div>
				{#if $page.data.authUser?.id}
					<div class="inline-flex mr-4">
						<Button class="text-default" on:click={handleReport} size="xs">
							<FlagLine class="inline-block h-5 w-5" />
							Report
						</Button>
					</div>
				{/if}
				<div class="inline-flex text-sm justify-center items-center">
					<CalendarLine class="text-default inline-block mr-2" />
					<time class="text-default text-right" datetime={community.created_at.toString()}>
						{dateSince(community.created_at)}
					</time>
				</div>
			</div>
		</div>
	</div>
{/if}
