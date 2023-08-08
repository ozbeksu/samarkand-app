import type { LayoutServerLoad } from "./$types";
import type { DTO, API, ProfileLayoutData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ params, fetch }): Promise<ProfileLayoutData> => {
	const { data, error } = await get<API.Response<DTO.User>>(
		fetch,
		`v1/users/${params.username}/profile`
	);

	return { user: data, error } as ProfileLayoutData;
}) satisfies LayoutServerLoad;
