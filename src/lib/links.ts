import type { UI } from "$lib/types";
import RocketLine from "svelte-remixicon/lib/icons/RocketLine.svelte";
import FireLine from "svelte-remixicon/lib/icons/FireLine.svelte";
import SparklingLine from "svelte-remixicon/lib/icons/SparklingLine.svelte";
import Home4Line from "svelte-remixicon/lib/icons/Home4Line.svelte";
import ContactsLine from "svelte-remixicon/lib/icons/ContactsLine.svelte";
import BubbleChartLine from "svelte-remixicon/lib/icons/BubbleChartLine.svelte";
import MailOpenLine from "svelte-remixicon/lib/icons/MailOpenLine.svelte";
import Notification4Line from "svelte-remixicon/lib/icons/Notification4Line.svelte";
import SearchLine from "svelte-remixicon/lib/icons/SearchLine.svelte";
import UserSharedLine from "svelte-remixicon/lib/icons/UserSharedLine.svelte";
import UserReceivedLine from "svelte-remixicon/lib/icons/UserReceivedLine.svelte";

import GroupLine from "svelte-remixicon/lib/icons/GroupLine.svelte";
import TeamLine from "svelte-remixicon/lib/icons/TeamLine.svelte";

export const listTabLinks: UI.Link[] = [
	{ name: "New", url: "?feed=new", icon: SparklingLine },
	{ name: "Hot", url: "?feed=hot", icon: FireLine },
	{ name: "Best", url: "?feed=best", icon: RocketLine }
];

export const connectionsTabLinks: UI.Link[] = [
	{ name: "Following", url: "?tab=following", icon: UserSharedLine },
	{ name: "Followers", url: "?tab=followers", icon: UserReceivedLine }
];

export const messagesTabLinks: UI.Link[] = [
	{ name: "Connections", url: "?tab=user", icon: GroupLine },
	{ name: "Groups", url: "?tab=group", icon: TeamLine },
	{ name: "Communities", url: "?tab=community", icon: BubbleChartLine }
];

export const profileTabLinks = (username: string | undefined): UI.Link[] => {
	if (!username) return [];
	return [
		{ name: "Posts", url: `/profile/@${username}/posts` },
		{ name: "Treads", url: `/profile/@${username}/treads` },
		{ name: "Comments", url: `/profile/@${username}/comments` },
		{ name: "Media", url: `/profile/@${username}/media` },
		{ name: "Saved", url: `/profile/@${username}/bookmarked` },
		{ name: "Up Voted", url: `/profile/@${username}/up-voted` },
		{ name: "Down Voted", url: `/profile/@${username}/down-voted` }
	];
};

export const iconBarLinks = (username: string | undefined): UI.Link[] => {
	const menu = [
		{ url: "/", icon: Home4Line, protected: false },
		{ url: "/search", icon: SearchLine, protected: false },
		{ url: "/communities", icon: BubbleChartLine, protected: false }
	];

	if (!username) return menu;

	return [
		...menu,
		{ url: `/profile/@${username}/connections`, icon: ContactsLine, protected: true },
		{ url: `/profile/@${username}/messages`, icon: MailOpenLine, protected: true },
		{ url: `/profile/@${username}/notifications`, icon: Notification4Line, protected: true }
	];
};
