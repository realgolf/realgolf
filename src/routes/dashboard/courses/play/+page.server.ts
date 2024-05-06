import { Course_Model } from '$lib/server/courses/models';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const courses = await Course_Model?.find({});

	const coursesCopy = courses?.map((course) => {
		const courseCopy = JSON.parse(JSON.stringify(course));
		delete courseCopy._id; // Remove the _id field
		return courseCopy;
	});

	return { courses: coursesCopy };
};
