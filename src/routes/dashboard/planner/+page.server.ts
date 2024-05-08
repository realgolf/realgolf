import { User_Model } from '$lib/server/user/models';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const email = event.cookies.get('email');

	const user = await User_Model?.findOne({ 'user.email': email });

	if (!user) {
		return {
			status: 404,
			body: {
				error: 'User not found'
			}
		};
	}

	const planners = user?.planners.map((planner) => {
		const plannerCopy = JSON.parse(JSON.stringify(planner));
		delete plannerCopy._id;
		return plannerCopy;
	});

	return { planners };
};

export const actions: Actions = {
	default: async (event) => {
		const email = event.cookies.get('email');

		const user = await User_Model?.findOne({ 'user.email': email });

		if (!user) {
			return {
				status: 404,
				body: {
					error: 'User not found'
				}
			};
		}

		const id = Math.random().toString(36).slice(2);

		user.planners.push({
			id,
			title: 'New Planner',
			description: '',
			dateOfCreation: new Date(),
			dateOfLastEdit: new Date(),
			plan: ''
		});

		await user.save();
		throw redirect(303, `/dashboard/planner/${id}`);
	}
};
