import type { LayoutServerLoad } from "./$types";
import type { API, DTO, CommunityPageData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ fetch, params }): Promise<CommunityPageData> => {
	const { data, error } = await get<API.Response<DTO.Community>>(
		fetch,
		`v1/communities/${params.community}/comments`
	);

	return {
		community: data,
		list: data?.comments ?? [],
		current: data?.comments?.length ? data?.comments[0] : null,
		error
	} as CommunityPageData;
}) satisfies LayoutServerLoad;
