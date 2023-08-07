import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (({ cookies, locals }) => {
	cookies.delete('token');
	cookies.delete('authUser');
	locals.authUser = undefined;

	throw redirect(307, '/login');
}) satisfies PageServerLoad;
