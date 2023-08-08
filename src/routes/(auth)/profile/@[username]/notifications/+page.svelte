<script lang="ts">
	import type { PageData } from "./$types";
	import ProfileLayout from "$lib/layouts/ProfileLayout.svelte";
	import { ProfileHeader } from "$lib/components";

	export let data: PageData;
</script>

<ProfileLayout>
	<svelte:fragment let:scrolling slot="list">
		<div class="bg-default sticky top-0 z-40">
			<ProfileHeader authUser={data?.authUser} {scrolling} user={data?.user} />
		</div>
	</svelte:fragment>

	<div class="px-8 pt-12" slot="details">Notifications</div>
</ProfileLayout>
