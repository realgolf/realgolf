import { User_Model } from '$lib/server/user/models';

import type { Types } from 'mongoose';
import type { PageServerLoad } from '../$types';

function removeIdFromGame(
	game: Types.Subdocument<Types.ObjectId> & {
		name?: string | null;
		id?: string | null;
		date?: string | null;
		teams?: string | null;
		data?: string | null;
	}
) {
	const gameCopy = JSON.parse(JSON.stringify(game));
	delete gameCopy._id; // Remove the _id field
	return gameCopy;
}

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

		// Check if any game has the same id as param_id
		const gameWithId = user_games.find((game: { id: string }) => game.id === param_id);

		if (!gameWithId) {
			return { status: 404, error: new Error('Game with specified ID not found') };
		}

		const game = removeIdFromGame(gameWithId);

		return { param_id, game };
	} catch (error) {
		return { status: 500, error: new Error('An unexpected error occurred') };
	}
};
