import { updateVisitCount } from '$lib/scripts/Planner/updateVisitCount';
import { User_Model } from '$lib/server/user/models';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event: { params: { name: string; id: string } }) => {
	const param_name: string = event.params.name;
	const id: string = event.params.id;

	const user = await User_Model?.findOne({
		'user.username': { $regex: new RegExp(param_name, 'i') }
	});

	if (!user) {
		return { status: 404, error: 'User could not be found' };
	}

	const username = user.user?.username;
	const email = user.user?.email;

	const currentPlanner = user?.planners.find((planner) => planner.id === id);

	if (!currentPlanner) {
		return {
			status: 404,
			body: {
				error: 'Planner not found'
			}
		};
	}

	if (email) {
		await updateVisitCount(email, id);
	}

	const title = currentPlanner.title;
	const description = currentPlanner.description;
	const dateOfCreation = currentPlanner.dateOfCreation;
	const dateOfLastEdit = currentPlanner.dateOfLastEdit;
	const plan = currentPlanner.plan;
	const visits = currentPlanner.visits;
	const edits = currentPlanner.edits;

	return { id, title, description, dateOfCreation, dateOfLastEdit, plan, visits, edits, username };
};
