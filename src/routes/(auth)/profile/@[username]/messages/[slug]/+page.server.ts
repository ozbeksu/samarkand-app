import type { PageServerLoad } from "./$types";
import type { MessagesPageData } from "$lib/types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ params, url, parent }): Promise<MessagesPageData> => {
	const tab = url.searchParams.get("tab");
	if (!tab) throw redirect(307, `/profile/@${params.username}/messages?tab=user`);

	const { list } = await parent();
	const current = list?.find((m) => m.slug === params.slug);

	return {
		list: list?.filter((m) => m.sender.sender_type === tab),
		current
	} as MessagesPageData;
}) satisfies PageServerLoad;
