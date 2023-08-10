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

export enum NotificationStatus {
	sent = "sent",
	received = "received",
	read = "read"
}

export enum MessageStatus {
	sent = "sent",
	read = "read",
	unread = "unread"
}

export enum MessageSenderType {
	user = "user",
	group = "group",
	community = "community"
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
	current?: DTO.Community | null;
}

interface CommunityPageData extends CommunityListLayoutData {
	community: DTO.Community | null;
	list?: DTO.Comment[] | null;
	current?: DTO.Comment | null;
}

interface ProfileLayoutData extends MasterLayoutData {
	user?: DTO.User | null;
	list?: DTO.Comment[] | null;
	current?: DTO.Comment | null;
}

type ProfilePageData = ProfileLayoutData;

interface ConnectionsLayoutData extends ProfileLayoutData {
	list?: DTO.User[] | null;
}

interface ConnectionsPageData extends ConnectionsLayoutData {
	current?: DTO.User | null;
	messages?: DTO.Message[] | null;
}

interface MessagesLayoutData extends ProfileLayoutData {
	list?: DTO.Message[] | null;
}

interface MessagesPageData extends MessagesLayoutData {
	current?: DTO.Message | null;
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
	export type ChatResponse = {
		data: { sent: DTO.Message[]; received: DTO.Message[] };
		error?: string;
	};
}

export namespace DTO {
	export type User = {
		id: number;
		username: string;
		email: string;
		profile: Profile;
		comments?: Comment[];
		followers?: User[];
		following?: User[];
		bookmarks?: Bookmark[];
		sent_messages?: MessageSender[];
		received_messages?: MessageRecipient[];
		notifications?: Notification[];
		votes?: Vote[];
		token: string;
		created_at: Date;
	};

	export type Message = {
		id: number;
		slug: string;
		subject?: string;
		content: string;
		sender: MessageSender;
	};

	export type MessageSender = {
		id: number;
		type: MessageSenderType;
		message_id: number;
		message: Message;
		user_id?: number;
		user?: User;
		group_id?: number;
		group?: Group;
		community_id?: number;
		community?: Community;
		sent_at: Date;
	};

	export type MessageRecipient = {
		id: number;
		status: MessageStatus;
		archived: boolean;
		deleted: boolean;
		message_id: number;
		message: Message;
		user_id?: number;
		user?: User;
		group_id?: number;
		group?: Group;
		community_id?: number;
		community?: Community;
		read_at: Date;
	};

	export type Profile = {
		id: number;
		first_name: string;
		last_name: string;
		avatar: DTO.Attachment;
		cover: DTO.Attachment;
		bio: string;
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
		created_at: Date;
	};

	export type Bookmark = {
		id: number;
		saved: boolean;
		user_id: number;
		comment_id: number;
		comment: Comment;
	};

	export type Notification = {
		id: number;
		slug: string;
		type: NotificationType;
		content?: string;
		user_id: number;
		user: User;
		status: NotificationStatus;
		created_at: Date;
	};

	export type Vote = {
		id: number;
		up_vote: boolean;
		down_vote: boolean;
		user_id: number;
		comment_id: number;
		comment: Comment;
	};

	export type Group = {
		id: number;
		name: string;
		slug: string;
		created_at: Date;
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
