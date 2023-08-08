import type { LayoutServerLoad } from "./$types";
import type { API, DTO, ProfileLayoutData } from "$lib/types";
import { redirect } from "@sveltejs/kit";
import { get } from "$lib/api";

export const load = (async ({ fetch, params, parent }): Promise<ProfileLayoutData> => {
	const tab = params.filter;
	if (!tab) throw redirect(307, `/profile/@${params.username}/posts`);

	const parentData = await parent();
	const layoutData: ProfileLayoutData = {} as ProfileLayoutData;
	const { data } = await get<API.Response<DTO.User>>(fetch, `v1/users/${params.username}/${tab}`);

	switch (tab) {
		case "bookmarked": {
			layoutData.list = data?.bookmarks?.map((b) => b.comment);
			layoutData.current = layoutData.list?.length ? layoutData.list[0] : null;
			break;
		}
		case "up-voted": {
			layoutData.list = data?.votes?.map((b) => b.comment);
			layoutData.current = layoutData.list?.length ? layoutData.list[0] : null;
			break;
		}
		case "down-voted": {
			layoutData.list = data?.votes?.map((b) => b.comment);
			layoutData.current = layoutData.list?.length ? layoutData.list[0] : null;
			break;
		}
		default: {
			layoutData.list = data?.comments;
			layoutData.current = layoutData.list?.length ? layoutData.list[0] : null;
			break;
		}
	}

	return { ...parentData, ...layoutData } as ProfileLayoutData;
}) satisfies LayoutServerLoad;
