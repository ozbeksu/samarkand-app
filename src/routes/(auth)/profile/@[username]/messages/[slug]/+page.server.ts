import type { PageServerLoad } from "./$types";
import type { MessagesPageData } from "$lib/types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ params, url, parent }): Promise<MessagesPageData> => {
	const tab = url.searchParams.get("tab");
	if (!tab) throw redirect(307, `/profile/@${params.username}/messages?tab=user`);

	const { list } = await parent();
	const messages = list?.filter((m) => m.sender.type === tab);
	const current = messages?.find((m) => m.slug === params.slug);

	return { list: messages, current } as MessagesPageData;
}) satisfies PageServerLoad;
