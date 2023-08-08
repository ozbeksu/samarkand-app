import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ url, params }): Promise<void> => {
	const tab = url.searchParams.get("tab");
	if (!tab) throw redirect(307, `/profile/@${params.username}/connections?tab=following`);
}) satisfies PageServerLoad;
