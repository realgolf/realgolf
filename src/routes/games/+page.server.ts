import { User_Model } from '$lib/server/user/models';

import type { PageServerLoad } from '../$types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load: PageServerLoad = async (event: any) => {
	try {
		const all_users = await User_Model?.find();
		const param_id: string = event.params.id;

		if (!all_users) {
			return { status: 404, error: new Error('Users could not be found') };
		}

		// Collect all games from all users
		const user_games = all_users.flatMap((user) => user.games);

		const games = user_games.map((game) => {
			const gameCopy = JSON.parse(JSON.stringify(game));
			delete gameCopy._id; // Remove the _id field
			return gameCopy;
		});

		return { param_id, games };
	} catch (error) {
		return { status: 500, error: new Error('An unexpected error occurred') };
	}
};
