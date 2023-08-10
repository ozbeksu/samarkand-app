<script lang="ts">
	import type { PageData } from "./$types";
	import ProfileLayout from "$lib/layouts/ProfileLayout.svelte";
	import { MessagesList, MessageCard, ProfileHeader, TabNav } from "$lib/components";
	import { page } from "$app/stores";
	import { messagesTabLinks } from "$lib/links";

	export let data: PageData;
</script>

<ProfileLayout>
	<svelte:fragment let:scrolling slot="list">
		<div class="bg-profile-cover fixed top-0 z-40">
			<ProfileHeader authUser={data?.authUser} {scrolling} user={data?.user} />

			<TabNav
				active={$page.url.search}
				class={`${scrolling ? "pt-2" : "pt-8"}`}
				linkMargin="mx-2"
				links={messagesTabLinks}
			/>
		</div>

		<div class="list-wrapper">
			<MessagesList list={data?.list} />
		</div>
	</svelte:fragment>

	<MessageCard class="px-8 pt-12" message={data?.current} slot="details" />
</ProfileLayout>
