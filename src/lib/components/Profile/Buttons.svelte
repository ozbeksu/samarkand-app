<script lang="ts">
	import { Button } from "$lib/components";

	import UserFollowLine from "svelte-remixicon/lib/icons/UserFollowLine.svelte";
	import UserUnfollowLine from "svelte-remixicon/lib/icons/UserUnfollowLine.svelte";
	import Edit2Line from "svelte-remixicon/lib/icons/Edit2Line.svelte";

	export let scrolling: boolean | undefined;
	export let sameUser = false;
	export let isFollowing = false;
</script>

{#if sameUser}
	<Button
		size="sm"
		class={`profile-edit btn-bordered text-default float-right ${scrolling ? "shrink" : ""}`}
	>
		<Edit2Line class="inline-block" />
		Edit Profile
	</Button>
{:else if isFollowing}
	<Button
		size="sm"
		class={`profile-edit btn-bordered text-default float-right ${scrolling ? "shrink" : ""}`}
	>
		<UserUnfollowLine class="inline-block" />
		Unfollow
	</Button>
{:else}
	<Button
		size="sm"
		class={`profile-edit btn-bordered text-default float-right ${scrolling ? "shrink" : ""}`}
	>
		<UserFollowLine class="inline-block" />
		Follow
	</Button>
{/if}
