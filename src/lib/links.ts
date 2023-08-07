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

export const listTabLinks: UI.Link[] = [
	{ name: "New", url: "?feed=new", icon: SparklingLine },
	{ name: "Best", url: "?feed=best", icon: RocketLine },
	{ name: "Hot", url: "?feed=hot", icon: FireLine }
];

export const profileTabLinks = (username: string): UI.Link[] => [
	{ name: "Posts", url: `/profile/@${username}/posts` },
	{ name: "Treads", url: `/profile/@${username}/treads` },
	{ name: "Comments", url: `/profile/@${username}/comments` },
	{ name: "Media", url: `/profile/@${username}/media` },
	{ name: "Saved", url: `/profile/@${username}/saved` },
	{ name: "Up Voted", url: `/profile/@${username}/upvoted` },
	{ name: "Down Voted", url: `/profile/@${username}/downvoted` }
];

export const iconBarLinks: UI.Link[] = [
	{ url: "/", icon: Home4Line, protected: false },
	{ url: "/search", icon: SearchLine, protected: false },
	{ url: "/communities", icon: BubbleChartLine, protected: true },
	{ url: "/connections", icon: ContactsLine, protected: true },
	{ url: "/messages", icon: MailOpenLine, protected: true },
	{ url: "/notifications", icon: Notification4Line, protected: true }
];
