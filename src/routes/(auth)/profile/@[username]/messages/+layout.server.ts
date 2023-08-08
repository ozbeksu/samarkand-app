import type { LayoutServerLoad } from "./$types";
import type { API, DTO, MessagesLayoutData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ params }): Promise<MessagesLayoutData> => {
	const { data, error } = await get<API.Response<DTO.User>>(
		fetch,
		`v1/users/${params.username}/messages`
	);

	return {
		list: data?.messages,
		error
	} as MessagesLayoutData;
}) satisfies LayoutServerLoad;
