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

	const user_username = user.user.username;
	const user_games = user.games;

	const games = user_games.map((game) => {
		const gameCopy = JSON.parse(JSON.stringify(game));
		delete gameCopy._id; // Remove the _id field
		return gameCopy;
	});

	return { user_username, games };
};
