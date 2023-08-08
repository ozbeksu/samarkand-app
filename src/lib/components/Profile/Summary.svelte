<script lang="ts">
	import { Heading } from "$lib/components/index.js";

	import Calendar2Line from "svelte-remixicon/lib/icons/CalendarLine.svelte";
	import { dateFormat } from "$lib/utils/date";

	export let scrolling: boolean | undefined;
	export let username: string | undefined;
	export let fullName: string | undefined;
	export let following: number | undefined;
	export let followers: number | undefined;
	export let date: Date | undefined;
</script>

<div class={`profile-info overflow-hidden ${scrolling ? "shrink" : ""}`}>
	<Heading class="font-semibold text-2xl" tag="h3">{fullName}</Heading>
	<p>@{username ?? ""}</p>
	<p class="text-secondary my-2">
		<Calendar2Line class="inline-block" />
		Joined
		{(date && dateFormat(date, "MMMM yyyy")) ?? ""}
	</p>
	<p>
		{following} <span class="text-secondary">Following</span>
		{followers} <span class="text-secondary">Followers</span>
	</p>
</div>
