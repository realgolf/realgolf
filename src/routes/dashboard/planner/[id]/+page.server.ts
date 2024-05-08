import { User_Model } from '$lib/server/user/models';
import { redirect, type Actions } from '@sveltejs/kit';
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

	const title = currentPlanner.title;
	const description = currentPlanner.description;
	const dateOfCreation = currentPlanner.dateOfCreation;
	const dateOfLastEdit = currentPlanner.dateOfLastEdit;
	const plan = currentPlanner.plan;

	return { id, title, description, dateOfCreation, dateOfLastEdit, plan };
};

export const actions: Actions = {
	default: async (event) => {
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

		const currentPlannerIndex = user.planners.findIndex((planner) => planner.id === id);

		if (currentPlannerIndex === -1) {
			return {
				status: 404,
				body: {
					error: 'Planner not found'
				}
			};
		}

		user.planners.splice(currentPlannerIndex, 1);

		await user.save();
		throw redirect(303, '/dashboard/planner');
	}
};
