import { Game_Model } from '$lib/server/games/models';
import type { PageServerLoad } from '../$types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load: PageServerLoad = async (event: any) => {
	try {
		let games = await Game_Model.find();
		const param_id: string = event.params.id;

		if (!games) {
			return { status: 404, error: new Error('Games could not be found') };
		}

		games = games.map((game) => {
			const gameCopy = JSON.parse(JSON.stringify(game));
			delete gameCopy._id; // Remove the _id field
			return gameCopy;
		});

		const game = games.find((game) => game.id === param_id);

		return { param_id, game };
	} catch (error) {
		return { status: 500, error: new Error('An unexpected error occurred') };
	}
};
