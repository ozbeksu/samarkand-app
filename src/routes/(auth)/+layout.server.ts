import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load = (async ({ locals }): Promise<void> => {
	if (!locals.authUser) throw redirect(307, "/login");
}) satisfies LayoutServerLoad;
