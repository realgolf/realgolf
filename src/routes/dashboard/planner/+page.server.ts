import { User_Model } from '$lib/server/user/models';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	new: async (event) => {
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

		throw redirect(308, `/dashboard/planner/${id}`);
	}
};
