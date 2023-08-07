import type { ZodIssue } from "zod/lib/ZodError";
import type { ZodType } from "zod/lib/types";

export type ValidationReturnType = {
	success: boolean;
	errors?: Record<string, string[]>;
};

export function validate<T>(data: T, schema: ZodType<unknown>): ValidationReturnType {
	const validation = schema.safeParse(data);
	if (validation.success) return { success: true };

	return {
		success: false,
		errors: extractErrors(validation.error.issues)
	};
}

export function extractErrors(issues: ZodIssue[]): Record<string, string[]> {
	const errors: Record<string, string[]> = {};

	issues.map((issue) => {
		const key = issue.path[0];
		errors[key] = [];
		errors[key].push(issue.message);
	});

	return errors;
}
