import { User_Model } from '$lib/server/user/models';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

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
	const comment = currentPlanner.comment;

	return { id, title, description, dateOfCreation, dateOfLastEdit, comment };
};

export const actions: Actions = {
	default: async (event) => {
		const email = event.cookies.get('email');
		const id = event.params.id;
		const data = await event.request.formData();
		const title = data.get('title') as string;
		const description = data.get('description') as string;
		const comment = data.get('comment') as string;
		const dateOfLastEdit = new Date();

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

		currentPlanner.title = title;
		currentPlanner.description = description;
		currentPlanner.comment = comment;
		currentPlanner.dateOfLastEdit = dateOfLastEdit;
		currentPlanner.edits += 1;

		await user.save();
		throw redirect(303, `/dashboard/planner/${id}`);
	}
};
