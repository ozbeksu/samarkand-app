import type { PageServerLoad } from "./$types";
import type { API, DTO, CommentPageData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ params }): Promise<CommentPageData> => {
	const { data, error } = await get<API.Response<DTO.Comment>>(
		fetch,
		`v1/comments/${params.comment}/comments`
	);

	return { current: data, error } as CommentPageData;
}) satisfies PageServerLoad;
