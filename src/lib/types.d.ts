import type { ComponentType } from "svelte";

export enum AccessLevel {
	public = "public",
	restricted = "restricted",
	private = "private"
}

export enum ContentType {
	post = "post",
	poll = "poll"
}

export enum NotificationType {
	success = "success",
	info = "info",
	warning = "warning",
	error = "error"
}

interface MasterLayoutData {
	users: DTO.User[] | null;
	tags: DTO.Tag[] | null;
	authUser?: DTO.User;
	error?: string;
}

interface ListLayoutData extends MasterLayoutData {
	list: DTO.Comment[] | null;
}

interface CommentPageData extends MasterLayoutData {
	list: DTO.Comment[] | null;
	current?: DTO.Comment | null;
}

interface CommunityListLayoutData extends MasterLayoutData {
	list: DTO.Community[] | null;
}

interface CommunityPageData extends CommunityListLayoutData {
	current?: DTO.Community | null;
}

export namespace UI {
	export type Link = {
		url: string;
		name?: string;
		icon?: ComponentType;
		protected?: boolean;
	};

	export type Notification = {
		id: number;
		message: string;
		type: NotificationType;
	};
}

export namespace API {
	export type AuthResponse = {
		data: {
			user: DTO.User;
			token: string;
		};
	};
	export type Response<T> = {
		data: T | null;
		error?: string;
	};
}

export namespace DTO {
	export type Profile = {
		id: number;
		first_name: string;
		last_name: string;
		avatar: DTO.Attachment;
		cover: DTO.Attachment;
		bio: string;
	};

	export type User = {
		id: number;
		username: string;
		email: string;
		profile: Profile;
		comments?: Comment[];
		token: string;
		created_at: Date;
	};

	export type Tag = {
		id: number;
		name: string;
		slug: string;
		comments?: Comment[];
		created_at: Date;
	};

	export type Topic = {
		id: number;
		name: string;
		description: string;
		created_at: Date;
	};

	export type Community = {
		id: number;
		title: string;
		slug: string;
		description: string;
		avatar?: Attachment;
		cover?: Attachment;
		comments?: Comment[];
		topics?: Topic[];
		access: AccessLevel;
		created_at: Date;
	};

	export type Comment = {
		id: number;
		title: string;
		slug: string;
		content: Post | Poll;
		author: User;
		community: Community;
		tags?: Tag[];
		comments?: Comment[];
		attachments?: Attachment[];
		bookmarks?: Bookmark[];
		votes?: Vote[];
		up_votes: number;
		down_votes: number;
		hot_score: number;
		best_score: number;
		created_at: Date;
	};

	type Attachment = {
		file_name?: string;
		src?: string;
		url?: string;
		width?: number;
		height?: number;
		type?: "media" | "file";
		created_at?: Date;
	};

	export type Bookmark = {
		id: number;
		saved: boolean;
		comment_id: number;
		user_id: number;
	};

	export type Vote = {
		id: number;
		up_vote: boolean;
		down_vote: boolean;
		comment_id: number;
		user_id: number;
	};

	export type Content = {
		type: ContentType;
	};

	interface Post extends Content {
		body: string;
		attachments: Attachment[];
	}

	interface Poll extends Content {
		body: string;
		attachments: Attachment[];
	}
}
