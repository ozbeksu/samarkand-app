import type { PageServerLoad } from "./$types";
import type { API, DTO, ProfilePageData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ fetch, params }): Promise<ProfilePageData> => {
	const { data, error } = await get<API.Response<DTO.Comment>>(
		fetch,
		`v1/comments/${params.comment}/comments`
	);

	return { current: data, error } as ProfilePageData;
}) satisfies PageServerLoad;
