import type { Actions, PageServerLoad } from "./$types";
import type { API } from "$lib/types";
import type { AuthForm } from "$lib/schemas/auth";
import { redirect } from "@sveltejs/kit";
import { post } from "$lib/api";
import { validate } from "$lib/utils/form";
import { authSchema } from "$lib/schemas/auth";

export const load = (({ locals }) => {
	if (locals?.authUser?.id) throw redirect(307, "/");
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request, fetch }) => {
		const formData: FormData = await request.formData();
		const auth = {
			email: formData.get("email"),
			password: formData.get("password")
		} as AuthForm;

		const validation = validate<AuthForm>(auth, authSchema);
		if (!validation.success) return validation;

		const { data } = await post<API.AuthResponse>(fetch, "auth", auth);
		cookies.set("token", data.token, { path: "/", httpOnly: true });
		cookies.set("authUser", btoa(JSON.stringify(data.user)), { path: "/" });

		throw redirect(307, "/");
	}
} satisfies Actions;
