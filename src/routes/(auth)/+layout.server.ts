import type { LayoutServerLoad } from "./$types";
import type { API, DTO, ProfileLayoutData } from "$lib/types";
import { redirect } from "@sveltejs/kit";
import { get } from "$lib/api";

export const load = (async ({ fetch, locals }): Promise<ProfileLayoutData> => {
	if (!locals.authUser) throw redirect(307, "/login");

	const { data, error } = await get<API.Response<DTO.User>>(
		fetch,
		`v1/users/${locals.authUser.username}/profile`
	);
	return { authUser: data, error } as ProfileLayoutData;
}) satisfies LayoutServerLoad;
