<script lang="ts">
	import type { ProfilePageData } from "$lib/types";
	import { page } from "$app/stores";
	import ProfileLayout from "$lib/layouts/ProfileLayout.svelte";
	import { ProfileHeader, TabNav, TreadCard, TreadList } from "$lib/components";
	import { profileTabLinks } from "$lib/links";

	export let data: ProfilePageData;
</script>

<ProfileLayout>
	<svelte:fragment let:scrolling slot="list">
		<div class="bg-default sticky top-0 z-40">
			<ProfileHeader authUser={data?.authUser} {scrolling} user={data?.user} />

			<TabNav
				active={$page.url.search}
				class={`${scrolling ? "pt-2" : "pt-8"}`}
				linkMargin="mx-2"
				links={profileTabLinks(data?.user?.username)}
			/>
		</div>

		<TreadList
			list={data?.list}
			route={`/profile/@${data?.user?.username}/${$page.params.filter}`}
		/>
	</svelte:fragment>

	<TreadCard class="px-8 pt-12" showComments slot="details" tread={data.current} />
</ProfileLayout>
