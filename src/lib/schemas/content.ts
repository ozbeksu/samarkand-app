import { z } from 'zod';

export const contentLinkSchema = z.object({
	title: z
		.string({ required_error: 'Title is required', invalid_type_error: 'Title must be a valid string' })
		.min(3, { message: 'Title must be 3 or more characters long' }),
	url: z.string().url({ message: 'Link must be a valid url' }),
	type: z.enum(['post', 'image', 'link']),
	treadId: z.number(),
	bubbleId: z.number(),
});

export type ContentLink = z.infer<typeof contentLinkSchema>;

export const contentPostSchema = z.object({
	title: z
		.string({ required_error: 'Title is required', invalid_type_error: 'Title must be a valid string' })
		.min(3, { message: 'Title must be 3 or more characters long' }),
	body: z
		.string({ required_error: 'Content is required', invalid_type_error: 'Content must be a valid string' })
		.min(10, { message: 'Content must be 3 or more characters long' }),
	type: z.enum(['post', 'image', 'link']),
	treadId: z.number(),
	bubbleId: z.number(),
});

export type ContentPost = z.infer<typeof contentPostSchema>;

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg'];

const isValidImage = (file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type);
const isValidSize = (file: File) => file.size <= MAX_FILE_SIZE;

const imageSchema = z
	.custom<File>()
	.refine(isValidSize, `Max image size is 10MB.`)
	.refine(isValidImage, 'Only .jpg, .jpeg, .png, .gif and .svg formats are supported.');

export const contentImageSchema = z.object({
	title: z
		.string({ required_error: 'Title is required', invalid_type_error: 'Title must be a valid string' })
		.min(3, { message: 'Title must be 3 or more characters long' }),
	images: z.array(imageSchema).min(1, { message: 'You must choose at least 1 image to upload' }),
	type: z.enum(['post', 'image', 'link']),
	treadId: z.number(),
	bubbleId: z.number(),
});

export type ContentImage = z.infer<typeof contentImageSchema>;
