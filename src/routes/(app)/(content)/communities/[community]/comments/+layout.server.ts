import type { LayoutServerLoad } from "./$types";
import type { API, DTO, CommentPageData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ params }): Promise<CommentPageData> => {
	const { data, error } = await get<API.Response<DTO.Community>>(
		fetch,
		`v1/communities/${params.community}/comments`
	);

	return {
		list: data?.comments ?? [],
		current: data?.comments?.length ? data?.comments[0] : null,
		error
	} as CommentPageData;
}) satisfies LayoutServerLoad;
