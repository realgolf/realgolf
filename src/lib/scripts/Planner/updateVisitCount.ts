import { User_Model } from '$lib/server/user/models';

export async function updateVisitCount(email: string | undefined, id: string) {
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

	currentPlanner.visits += 1;

	await user.save();
}
