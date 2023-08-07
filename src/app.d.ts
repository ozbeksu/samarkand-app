// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { DTO } from '$lib/types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			authUser?: DTO.User;
			token?: string;
		}

		// interface PageData {}
		// interface Platform {}
	}
}

export {};
