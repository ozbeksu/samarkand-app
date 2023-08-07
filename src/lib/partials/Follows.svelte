<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Avatar, Heading } from "$lib/components";

	import GroupLine from "svelte-remixicon/lib/icons/GroupLine.svelte";

	export let users: DTO.User[];
</script>

<div class="my-4">
	<Heading class="p-4 border-b border-brand text-default text-xl font-bold" tag="h4">
		<GroupLine class="text-default mx-2 inline-block h-6 w-6" />
		Who to follow
	</Heading>
	<ul class="list-none border-b border-brand">
		{#each users as user}
			<li class="my-2 flex w-full items-center">
				<a href={`/profile/@${user.username}`} class="link-bg-secondary inline-flex w-full px-2">
					<Avatar class="my-4 ml-2 mr-4 w-10 h-10 flex-col" {user} />
					<div class="flex flex-col justify-center">
						<Heading class="text-default text-xl font-bold" tag="h4">
							{user.profile.first_name}
							{user.profile.last_name}
						</Heading>
						<p class="text-secondary">{user.username}</p>
					</div>
				</a>
			</li>
		{:else}
			<li class="flex items-center">
				<p>Nothing yet!</p>
			</li>
		{/each}
	</ul>
</div>
