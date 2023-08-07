import type { Actions, PageServerLoad } from "./$types";
import type { API, DTO } from "$lib/types";
import type { ProfileForm } from "$lib/schemas/profile";
import { redirect } from "@sveltejs/kit";
import { post } from "$lib/api";
import { validate } from "$lib/utils/form";
import { profileSchema } from "$lib/schemas/profile";

export const load = (({ locals }) => {
	if (locals?.authUser?.username) throw redirect(307, `/profile/@${locals?.authUser?.username}`);
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request, fetch, locals }) => {
		const formData: FormData = await request.formData();
		const profile = {
			username: formData.get("username"),
			firstName: formData.get("firstName"),
			lastName: formData.get("lastName")
		} as ProfileForm;

		const validation = validate<ProfileForm>(profile, profileSchema);
		if (!validation.success) return validation;

		const endpoint = `v1/users/${locals?.authUser?.id}/profile`;
		const { data } = await post<API.Response<DTO.User>>(fetch, endpoint, profile);
		cookies.set("authUser", btoa(JSON.stringify(data)), { path: "/" });

		throw redirect(307, `/profile/@${data?.username}/posts`);
	}
} satisfies Actions;
