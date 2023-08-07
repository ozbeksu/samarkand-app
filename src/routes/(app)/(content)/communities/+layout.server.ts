import type { LayoutServerLoad } from "./$types";
import type { API, CommunityListLayoutData, DTO } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ fetch }): Promise<CommunityListLayoutData> => {
	const { data, error } = await get<API.Response<DTO.Community[]>>(fetch, "v1/communities");

	return { list: data ?? [], error } as CommunityListLayoutData;
}) satisfies LayoutServerLoad;
