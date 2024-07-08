import { Game_Model } from '$lib/server/games/models';
import { User_Model } from '$lib/server/user/models';
import type { PageServerLoad } from '../$types';
import { Actions } from './$types';

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

export const actions: Actions = {
	default: async (event) => {
		const email = event.cookies.get('email');
		const formData = await event.request.formData();
		const comment = formData.get('comment') as string;
		const user = await User_Model.findOne({ 'user.email': email });
		let game = await Game_Model.findOne({ id: event.params.id });
		let user_game = user?.games.find((game) => game.id === event.params.id);

		if (!user) {
			return { status: 401, error: new Error('User not found') };
		}

		if (!game) {
			return { status: 404, error: new Error('Game not found') };
		}

		try {
			game.comments.push({
				id: user.id,
				username: user?.user.username,
				date: new Date(),
				content: comment,
				reactions: [],
				replies: [],
				edited: false
			});

			await game.save();

			user_game?.comments.push({
				id: user.id,
				username: user?.user.username,
				date: new Date(),
				content: comment,
				reactions: [],
				replies: [],
				edited: false
			});

			await user.save();
		} catch (error) {
			return { status: 500, error: new Error('An unexpected error occurred') };
		}
	}
};
