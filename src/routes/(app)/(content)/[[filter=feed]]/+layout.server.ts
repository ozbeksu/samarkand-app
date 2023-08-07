import type { LayoutServerLoad } from "./$types";
import type { API, DTO, ListLayoutData } from "$lib/types";
import { get, toRecord } from "$lib/api";

export const load = (async ({ fetch, params }): Promise<ListLayoutData> => {
	const { data, error } = await get<API.Response<DTO.Comment[]>>(
		fetch,
		"v1/comments",
		toFeedParams(params.filter)
	);

	return { list: data ?? [], error } as ListLayoutData;
}) satisfies LayoutServerLoad;

function toFeedParams(filter?: string): Record<string, string> {
	const opts: Record<string, string | number | null> = { parent: "null", limit: 10 };
	if (!filter) return toRecord(opts) as Record<string, string>;

	const params: Record<string, Record<string, unknown>> = {
		best: { sort: "best" },
		hot: { sort: "hot" },
		new: { sort: "new" }
	};

	return { ...opts, ...params[filter] } as Record<string, string>;
}
