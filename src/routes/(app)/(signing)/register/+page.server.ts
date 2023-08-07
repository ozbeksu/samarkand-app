import type { Actions } from "./$types";
import type { API, DTO } from "$lib/types";
import type { AuthForm } from "$lib/schemas/auth";
import { authSchema } from "$lib/schemas/auth";
import { validate } from "$lib/utils/form";
import { post } from "$lib/api";
import { redirect } from "@sveltejs/kit";

export const actions = {
	default: async ({ cookies, request, fetch }) => {
		const formData: FormData = await request.formData();
		const auth = {
			email: formData.get("email"),
			password: formData.get("password")
		} as AuthForm;

		const validation = validate<AuthForm>(auth, authSchema);
		if (!validation.success) return validation;

		const { data } = await post<API.Response<DTO.User>>(fetch, "v1/users", auth);
		cookies.set("authUser", btoa(JSON.stringify(data)), { path: "/" });

		throw redirect(307, "/register/profile");
	}
} satisfies Actions;
