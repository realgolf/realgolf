import { User_Model } from '$lib/server/user/models';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event: { params: { name: string } }) => {
	const param_name: string = event.params.name;

	const user = await User_Model?.findOne({
		'user.username': { $regex: new RegExp(param_name, 'i') }
	});

	if (!user) {
		return { status: 404, error: 'User could not be found' };
	}

	const username = user?.user.username;

	const planners = user.planners.map((planner) => {
		const plannerCopy = JSON.parse(JSON.stringify(planner));
		delete plannerCopy._id;
		return plannerCopy;
	});

	return { username, planners };
};
