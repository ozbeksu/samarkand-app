<script lang="ts">
	import type { PageData } from "./$types";
	import type { DTO } from "$lib/types";
	import { page } from "$app/stores";
	import ProfileLayout from "$lib/layouts/ProfileLayout.svelte";
	import { ContactList, ProfileHeader, TabNav } from "$lib/components";
	import { connectionsTabLinks } from "$lib/links";

	export let data: PageData;

	let list: DTO.User[] | undefined;
	$: list =
		$page.url.searchParams.get("tab") === "following" ? data.user?.following : data.user?.followers;
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
			<ContactList {list} />
		</div>
	</svelte:fragment>

	<div class="px-8 pt-12" slot="details">Connections</div>
</ProfileLayout>
