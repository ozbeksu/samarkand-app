export function match(value: string) {
	return ["posts", "treads", "comments", "media", "bookmarked", "up-voted", "down-voted"].includes(
		value
	);
}
