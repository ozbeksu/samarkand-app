<script lang="ts">
	import type { PageData } from "./$types";
	import ProfileLayout from "$lib/layouts/ProfileLayout.svelte";
	import { MessagesList, MessageCard, ProfileHeader } from "$lib/components";

	export let data: PageData;
</script>

<ProfileLayout>
	<svelte:fragment let:scrolling slot="list">
		<div class="bg-default sticky top-0 z-40 border-b border-brand pb-8">
			<ProfileHeader authUser={data?.authUser} {scrolling} user={data?.user} />
		</div>
		<MessagesList list={data?.list} />
	</svelte:fragment>

	<MessageCard message={data?.current} slot="details" />
</ProfileLayout>
