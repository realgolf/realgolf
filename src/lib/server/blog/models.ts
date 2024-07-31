import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
	title: { type: String, required: true },
	published: { type: Date, required: true },
	updated: { type: Date, required: true },
	description: { type: String, required: true },
	content: { type: String, required: true }
});

/**
 * The Mongoose model for the Course collection.
 */
export const Blog_Model = mongoose.model('Blog', BlogSchema);
