import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
	const authUser = event.cookies.get("authUser");

	event.locals.authUser = authUser ? JSON.parse(atob(authUser)) : undefined;

	return resolve(event);
}) satisfies Handle;
