import { Blog_Model } from '$lib/server/blog/models';
import { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event: any) => {
	const id = event.params.id;

	try {
		let blog = await Blog_Model.find();

		if (!blog) {
			return { status: 404, error: new Error('Blog could not be found') };
		}

		blog = blog.map((blog) => {
			const blogCopy = JSON.parse(JSON.stringify(blog));
			delete blogCopy._id; // Remove the _id field
			return blogCopy;
		});

		blog = blog.find((blog) => blog.id === id);

		return { blog };
	} catch (error) {
		return { status: 500, error: new Error('An unexpected error occurred') };
	}
};
