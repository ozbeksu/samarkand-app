import type { LayoutServerLoad } from "./$types";
import type { API, DTO, MasterLayoutData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ fetch, locals }): Promise<MasterLayoutData> => {
	const layoutData = { authUser: locals?.authUser } as MasterLayoutData;

	const users = await get<API.Response<DTO.User[]>>(fetch, "v1/users", { limit: 5 });
	if (users.error) {
		layoutData.error = users.error;
	} else {
		layoutData.users = users.data;
	}

	const tags = await get<API.Response<DTO.Tag[]>>(fetch, "v1/tags", { limit: 5 });
	if (tags.error) {
		layoutData.error = tags.error;
	} else {
		layoutData.tags = tags.data;
	}

	return layoutData;
}) satisfies LayoutServerLoad;
