<script lang="ts">
	import type { DTO } from "$lib/types";
	import type { AppStoreData } from "$lib/stores/AppStore";
	import { page } from "$app/stores";
	import { Button } from "$lib/components";
	import { appStore } from "$lib/stores/AppStore";
	import { toApiUrl, toPostData } from "$lib/api";

	import ArrowUpLine from "svelte-remixicon/lib/icons/ArrowUpLine.svelte";
	import ArrowUpFill from "svelte-remixicon/lib/icons/ArrowUpFill.svelte";
	import ArrowDownLine from "svelte-remixicon/lib/icons/ArrowDownLine.svelte";
	import ArrowDownFill from "svelte-remixicon/lib/icons/ArrowDownFill.svelte";
	import ShareLine from "svelte-remixicon/lib/icons/ShareLine.svelte";
	import BookmarkLine from "svelte-remixicon/lib/icons/BookmarkLine.svelte";
	import BookmarkFill from "svelte-remixicon/lib/icons/BookmarkFill.svelte";
	import FlagLine from "svelte-remixicon/lib/icons/FlagLine.svelte";
	import ReplyLine from "svelte-remixicon/lib/icons/ReplyLine.svelte";

	export let tread: DTO.Comment;

	const apiUrl = toApiUrl(`v1/comments/${tread.slug}/users/${$page.data.authUser?.username}`);
	const postData = toPostData();

	let upVoted = tread?.votes?.find((v: DTO.Vote) => isTreadOwner(v))?.up_vote ?? false;
	let downVoted = tread?.votes?.find((v: DTO.Vote) => isTreadOwner(v))?.down_vote ?? false;
	let bookmarked = tread?.bookmarks?.find((b: DTO.Bookmark) => isTreadOwner(b))?.saved ?? false;

	function isTreadOwner(r: DTO.Vote | DTO.Bookmark): boolean {
		return tread.id === r.comment_id && $page.data?.authUser?.id === r.user_id;
	}

	function handleUpVote() {
		fetch(`${apiUrl}/up-vote`, postData)
			.then((res) => res.json())
			.then(({ data }) => {
				tread = data;
				upVoted = !upVoted;
			});
	}

	function handleDownVote() {
		fetch(`${apiUrl}/down-vote`, postData)
			.then((res) => res.json())
			.then(({ data }) => {
				tread = data;
				downVoted = !downVoted;
			});
	}

	function handleSave() {
		fetch(`${apiUrl}/bookmark`, postData)
			.then((res) => res.json())
			.then(({ data }) => {
				tread = data;
				bookmarked = !bookmarked;
			});
	}

	function handleReply() {
		appStore.update((state: AppStoreData) => ({
			...state,
			drawerShown: true,
			commentId: tread?.id ?? 0,
			communityId: tread?.community.id ?? 0
		}));
	}

	function handleShare() {
		console.log("Share", tread);
	}

	function handleReport() {
		console.log("Report", tread);
	}
</script>

<div class=" mt-2 flex justify-start">
	{#if $page.data.authUser?.id}
		<div class="inline-flex">
			<Button class="btn-transparent" on:click={handleUpVote} size="xs">
				{#if upVoted}
					<ArrowUpFill class="text-primary inline-block h-5 w-5" />
				{:else}
					<ArrowUpLine class="inline-block h-5 w-5" />
				{/if}
			</Button>
			<div class="text-secondary mx-2 inline-flex items-center justify-center text-xs">
				{(tread.up_votes ?? 0) - (tread.down_votes ?? 0)}
			</div>
			<Button class="btn-transparent" on:click={handleDownVote} size="xs">
				{#if downVoted}
					<ArrowDownFill class="text-primary inline-block h-5 w-5" />
				{:else}
					<ArrowDownLine class="inline-block h-5 w-5" />
				{/if}
			</Button>
		</div>
		<div class="inline-flex">
			<Button class="btn-transparent" on:click={handleReply} size="xs">
				<ReplyLine class="mr-2 inline-block h-5 w-5" />
				Reply
			</Button>
		</div>
		<div class="inline-flex">
			<Button class="btn-transparent" on:click={handleSave} size="xs">
				{#if bookmarked}
					<BookmarkFill class="text-primary mr-2 inline-block h-5 w-5" />
				{:else}
					<BookmarkLine class="mr-2 inline-block h-5 w-5" />
				{/if}
				Save
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
