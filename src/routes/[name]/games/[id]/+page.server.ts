import { add_comments } from '$lib/server/games/comments/add_comments';
import { add_reply } from '$lib/server/games/comments/add_reply';
import { delete_comment } from '$lib/server/games/comments/delete_comment';
import { delete_reply } from '$lib/server/games/comments/delete_reply';
import { Game_Model } from '$lib/server/games/models';
import { User_Model } from '$lib/server/user/models';
import type { Types } from 'mongoose';
import type { Actions, PageServerLoad } from './$types';

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
	const param_name: string = event.params.name;
	const param_id: string = event.params.id;

	const user = await User_Model?.findOne({
		'user.username': { $regex: new RegExp(param_name, 'i') }
	});

	if (!user) {
		return { status: 404, error: 'User could not be found' };
	}

	const user_games = user.games;

	// Check if any game has the same id as param_id
	const gameWithId = user_games.find((game) => game.id === param_id);

	if (!gameWithId) {
		return { status: 404, error: 'Game with specified ID not found' };
	}

	const game = removeIdFromGame(gameWithId);

	return { param_name, param_id, game };
};

export const actions: Actions = {
	add_comment: async (event) => {
		const email = event.cookies.get('email');
		const formData = await event.request.formData();
		const comment = formData.get('comment') as string;
		const user = await User_Model.findOne({ 'user.email': email });
		let game = await Game_Model.findOne({ id: event.params.id });
		let user_game = user?.games.find((game) => game.id === event.params.id);

		await add_comments(user, game, comment, user_game);
	},
	delete_comment: async (event) => {
		const email = event.cookies.get('email') as string;
		const formData = await event.request.formData();
		const comment_id = formData.get('id') as string;

		await delete_comment(email, event, comment_id);
	},
	add_reply: async (event) => {
		const email = event.cookies.get('email') as string;
		const formData = await event.request.formData();
		const comment_id = formData.get('comment_id') as string;
		const reply = formData.get('reply') as string;

		await add_reply(event, email, comment_id, reply);
	},
	delete_reply: async (event) => {
		const email = event.cookies.get('email') as string;
		const formData = await event.request.formData();
		const comment_id = formData.get('comment_id') as string;
		const reply_id = formData.get('reply_id') as string;

		await delete_reply(event, email, comment_id, reply_id);
	}
};
