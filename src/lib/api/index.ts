import { PUBLIC_API_URL } from "$env/static/public";

export async function get<T>(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string | number>
): Promise<T> {
	const response = await fetch(toApiUrl(endpoint, params));

	return await response.json();
}

export async function post<T>(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	data?: Record<string, unknown>
): Promise<T> {
	const response = await fetch(toApiUrl(endpoint), toPostData(data));

	return await response.json();
}

export function toApiUrl(endpoint: string, params?: Record<string, string | number>): string {
	return params
		? `${PUBLIC_API_URL}/${endpoint}?${toFilters(params)}`
		: `${PUBLIC_API_URL}/${endpoint}`;
}

export function toPostData(data?: Record<string, unknown>): RequestInit {
	const opts: RequestInit = {
		method: "POST",
		headers: { "Content-Type": "application/json" }
	};

	if (data) {
		opts.body = JSON.stringify(data);
	}

	return opts;
}

export function toFilters(params: Record<string, string | number>): string {
	return new URLSearchParams(toRecord(params)).toString();
}

export function toRecord(data: Record<string, string | number | null>): Record<string, string> {
	const output: Record<string, string> = {};

	for (const key in data) {
		const value = data[key];

		if (typeof value === "string") {
			output[key] = value;
		}

		if (typeof value === "number") {
			if (String(value).includes(".")) {
				output[key] = String(value.toFixed(4));
			} else {
				output[key] = value.toString();
			}
		}
	}

	return output;
}
