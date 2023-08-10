import type { LayoutServerLoad } from "./$types";
import type { API, DTO, MessagesLayoutData } from "$lib/types";
import { get } from "$lib/api";

export const load = (async ({ params }): Promise<MessagesLayoutData> => {
    const { data, error } = await get<API.Response<DTO.User>>(
        fetch,
        `v1/users/${params.username}/messages`
    );

    const list = data?.received_messages?.map((r) => r.message);

    return { list, error } as MessagesLayoutData;
}) satisfies LayoutServerLoad;
