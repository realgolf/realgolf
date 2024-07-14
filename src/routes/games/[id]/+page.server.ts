import { add_comments } from '$lib/server/games/comments/add_comments';
import { add_reply } from '$lib/server/games/comments/add_reply';
import { delete_comment } from '$lib/server/games/comments/delete_comment';
import { delete_reply } from '$lib/server/games/comments/delete_reply';
import { Game_Model } from '$lib/server/games/models';
import { User_Model } from '$lib/server/user/models';
import type { PageServerLoad } from '../$types';
import { Actions } from './$types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load: PageServerLoad = async (event: any) => {
	try {
		let games = await Game_Model.find();
		const param_id: string = event.params.id;
		const username = event.cookies.get('username');

		if (!games) {
			return { status: 404, error: 'Games could not be found' };
		}

		games = games.map((game) => {
			const gameCopy = JSON.parse(JSON.stringify(game));
			delete gameCopy._id; // Remove the _id field
			return gameCopy;
		});

		const game = games.find((game) => game.id === param_id);

		return { param_id, game, username };
	} catch (error) {
		return { status: 500, error: 'An unexpected error occurred' };
	}
};

export const actions: Actions = {
	add_comment: async (event) => {
		const email = event.cookies.get('email') as string;
		const formData = await event.request.formData();
		const comment = formData.get('comment') as string;
		const user = await User_Model.findOne({ 'user.email': email });
		let game = await Game_Model.findOne({ id: event.params.id });
		let user_game = user?.games.find((game) => game.id === event.params.id);

		await add_comments(user, game, comment, user_game);
	},
	edit_comment: async (event) => {},
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
	edit_reply: async (event) => {},
	delete_reply: async (event) => {
		const email = event.cookies.get('email') as string;
		const formData = await event.request.formData();
		const comment_id = formData.get('comment_id') as string;
		const reply_id = formData.get('reply_id') as string;

		await delete_reply(event, email, comment_id, reply_id);
	}
};
