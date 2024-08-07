import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
	title: { type: String, required: true },
	published: { type: Date, required: true },
	updated: { type: Date, required: true },
	author: { type: String, required: true },
	description: { type: String, required: true },
	content: { type: String, required: true },
	toc: [
		{
			text: { type: String, required: true },
			id: { type: String, required: true }
		}
	]
});

export const Blog_Model = mongoose.model('Blog', BlogSchema);
