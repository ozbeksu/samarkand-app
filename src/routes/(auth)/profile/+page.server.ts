import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ parent }): Promise<void> => {
	const { authUser } = await parent();
	throw redirect(307, authUser ? `/profile/@${authUser.username}` : "/login");
}) satisfies PageServerLoad;
