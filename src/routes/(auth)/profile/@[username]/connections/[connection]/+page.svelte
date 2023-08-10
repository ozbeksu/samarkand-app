<script lang="ts">
	import type { PageData } from "./$types";
	import { page } from "$app/stores";
	import ProfileLayout from "$lib/layouts/ProfileLayout.svelte";
	import { ContactList, ContactCard, ProfileHeader, TabNav } from "$lib/components";
	import { connectionsTabLinks } from "$lib/links";

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
				links={connectionsTabLinks}
			/>
		</div>
		<div class="list-wrapper">
			<ContactList list={data?.list} />
		</div>
	</svelte:fragment>

	<ContactCard class="px-8 pt-12" messages={data?.messages} slot="details" user={data?.current} />
</ProfileLayout>
