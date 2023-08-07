import { z } from 'zod';

export const profileSchema = z.object({
	username: z.string().min(3),
	firstName: z.string().min(2),
	lastName: z.string().min(2),
});
export type ProfileForm = z.infer<typeof profileSchema>;
