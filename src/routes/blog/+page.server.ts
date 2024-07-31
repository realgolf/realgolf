import { Blog_Model } from '$lib/server/blog/models';
import { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event: any) => {
	try {
		let blogs = await Blog_Model.find().sort({ published: -1 });

		if (!blogs) {
			return { status: 404, error: new Error('Blog could not be found') };
		}

		blogs = blogs.map((blog) => {
			const blogCopy = JSON.parse(JSON.stringify(blog));
			delete blogCopy._id; // Remove the _id field
			return blogCopy;
		});

		return { blogs };
	} catch (error) {
		return { status: 500, error: new Error('An unexpected error occurred') };
	}
};
