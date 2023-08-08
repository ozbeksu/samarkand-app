import type { LayoutServerLoad } from "./$types";
import type { API, DTO, ProfileLayoutData } from "$lib/types";
import { redirect } from "@sveltejs/kit";
import { get } from "$lib/api";

export const load = (async ({ fetch, params, parent }): Promise<ProfileLayoutData> => {
	const tab = params.filter;
	if (!tab) throw redirect(307, `/profile/@${params.username}/posts`);

	const parentData = await parent();
	const { data } = await get<API.Response<DTO.User>>(fetch, `v1/users/${params.username}/${tab}`);

	return {
		...parentData,
		list: data?.comments,
		current: data?.comments?.length ? data.comments[0] : null
	} as ProfileLayoutData;
}) satisfies LayoutServerLoad;
