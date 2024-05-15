import { User_Model } from '$lib/server/user/models';
import type { Stars } from '$lib/types/planner';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const email = event.cookies.get('email');
	const id = event.params.id;

	const user = await User_Model?.findOne({ 'user.email': email });

	if (!user) {
		return {
			status: 404,
			body: {
				error: 'User not found'
			}
		};
	}

	const currentPlanner = user?.planners.find((planner) => planner.id === id);

	if (!currentPlanner) {
		return {
			status: 404,
			body: {
				error: 'Planner not found'
			}
		};
	}

	const stargazers = currentPlanner.stars?.list.map((star) => {
		const starCopy = JSON.parse(JSON.stringify(star));
		delete starCopy._id;
		return starCopy;
	}) as Stars[];

	const title = currentPlanner.title;

	return { stargazers, title };
};
