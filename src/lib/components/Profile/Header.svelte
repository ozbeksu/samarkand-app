<script lang="ts">
	import type { DTO } from "$lib/types";
	import { onMount } from "svelte";
	import { FastAverageColor } from "fast-average-color";
	import { Avatar } from "$lib/components";
	import Cover from "$lib/components/Profile/Cover.svelte";
	import Buttons from "$lib/components/Profile/Buttons.svelte";
	import Summary from "$lib/components/Profile/Summary.svelte";

	export let user: DTO.User | undefined | null;
	export let authUser: DTO.User | undefined;
	export let scrolling: boolean | undefined = false;

	let container: HTMLDivElement;
	let bgColor = "transparent";
	let fullName = `${user?.profile.first_name} ${user?.profile.last_name}`;

	function setBgColor() {
		const img: HTMLImageElement | null = container.querySelector(".profile-image");
		if (img) {
			new FastAverageColor()
				.getColorAsync(img)
				.then((color) => (bgColor = color.rgba))
				.catch((e) => console.log(e));
		}
	}

	onMount(() => {
		if (!user?.profile?.cover) {
			setBgColor();
		}
	});
</script>

<div bind:this={container}>
	<Cover {bgColor} cover={user?.profile?.cover} {scrolling} />
	<div class="px-8 pt-12 -mt-32">
		<Avatar class="profile-image mb-4 w-36" {user} />

		<Buttons
			isFollowing={Boolean(authUser?.following?.find((f) => f.id === user?.id))}
			sameUser={user?.username === authUser?.username}
			{scrolling}
		/>

		<Summary
			date={user?.created_at}
			followers={user?.followers?.length}
			following={user?.following?.length}
			{fullName}
			{scrolling}
			username={user?.username}
		/>
	</div>
</div>
