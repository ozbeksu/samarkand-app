import type { PageServerLoad } from "./$types";
import type { API, DTO, CommunityPageData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ fetch, parent, params }): Promise<CommunityPageData> => {
	const { community, list } = await parent();
	const { data, error } = await get<API.Response<DTO.Comment>>(
		fetch,
		`v1/comments/${params.comment}/comments`
	);

	return { community, list, current: data, error } as CommunityPageData;
}) satisfies PageServerLoad;
