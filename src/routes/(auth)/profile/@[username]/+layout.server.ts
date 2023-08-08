import type { LayoutServerLoad } from "./$types";
import type { DTO, API, ProfileLayoutData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ locals, params, fetch }): Promise<ProfileLayoutData> => {
	const layoutData: ProfileLayoutData = {} as ProfileLayoutData;

	if (locals?.authUser?.username === params.username) {
		layoutData.user = locals.authUser;
	} else {
		const { data, error } = await get<API.Response<DTO.User>>(fetch, `users/${params.username}`);

		layoutData.user = data;
		layoutData.error = error;
	}

	return layoutData;
}) satisfies LayoutServerLoad;
