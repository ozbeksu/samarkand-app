import type { PageServerLoad } from "./$types";
import type { MessagesPageData } from "$lib/types";

export const load = (async ({ params, parent }): Promise<MessagesPageData> => {
	const { list } = await parent();
	const current = list?.find((m) => m.id === parseInt(params.id));

	return { list, current } as MessagesPageData;
}) satisfies PageServerLoad;
