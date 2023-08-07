import type { PageServerLoad } from "./$types";
import type { CommunityPageData } from "$lib/types";

export const load = (async ({ parent, params }): Promise<CommunityPageData> => {
	const { list } = await parent();
	const current = list?.find((c) => c.slug === params.community);

	return { current } as CommunityPageData;
}) satisfies PageServerLoad;
