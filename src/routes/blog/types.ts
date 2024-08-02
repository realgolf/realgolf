/**
 * Represents a blog post.
 */
export type posts = {
	id: string;
	title: string;
	published: Date;
	updated: Date | null;
	description: string;
};
