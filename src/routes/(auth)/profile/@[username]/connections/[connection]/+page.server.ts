import type { PageServerLoad } from "./$types";
import type { API, ConnectionsPageData } from "$lib/types";
import { orderBy } from "lodash";
import { redirect } from "@sveltejs/kit";
import { get } from "$lib/api";

export const load = (async ({ url, params, parent }): Promise<ConnectionsPageData> => {
	const tab = url.searchParams.get("tab");
	if (!tab) throw redirect(307, `/profile/@${params.username}/connections?tab=following`);

	const { user } = await parent();
	const list = tab === "following" ? user?.following : user?.followers;
	const current = list?.find((u) => u.username === params.connection);

	const { data, error } = await get<API.ChatResponse>(
		fetch,
		`v1/users/${params.username}/chats/user/${current?.username}`
	);

	return {
		messages: orderBy([...data.sent, ...data.received], ["sender.sent_at"], ["asc"]),
		list,
		current,
		error
	} as ConnectionsPageData;
}) satisfies PageServerLoad;
