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
			return { status: 404, error: 'Games could not be found' };
		}

		games = games.map((game) => {
			const gameCopy = JSON.parse(JSON.stringify(game));
			delete gameCopy._id; // Remove the _id field
			return gameCopy;
		});

		const game = games.find((game) => game.id === param_id);

		return { param_id, game };
	} catch (error) {
		return { status: 500, error: 'An unexpected error occurred' };
	}
};

export const actions: Actions = {
	add_comment: async (event) => {
		const email = event.cookies.get('email');
		const formData = await event.request.formData();
		const comment = formData.get('comment') as string;
		const user = await User_Model.findOne({ 'user.email': email });
		let game = await Game_Model.findOne({ id: event.params.id });
		let user_game = user?.games.find((game) => game.id === event.params.id);

		if (!user) {
			return { status: 401, error: 'User not found' };
		}

		if (!game) {
			return { status: 404, error: 'Game not found' };
		}

		try {
			const id = Math.random().toString(36).slice(2);

			game.comments.push({
				id,
				username: user?.user.username,
				date: new Date(),
				content: comment,
				reactions: [],
				replies: [],
				edited: false
			});

			await game.save();

			user_game?.comments.push({
				id,
				username: user?.user.username,
				date: new Date(),
				content: comment,
				reactions: [],
				replies: [],
				edited: false
			});

			await user.save();
		} catch (error) {
			return { status: 500, error: 'An unexpected error occurred' };
		}
	},
	edit_comment: async (event) => {},
	delete_comment: async (event) => {
		const email = event.cookies.get('email');
		const formData = await event.request.formData();
		const comment_id = formData.get('id') as string;

		if (!email) {
			return { status: 400, error: 'Email not found' };
		}

		const user = await User_Model.findOne({ 'user.email': email });

		if (!user) {
			return { status: 401, error: 'User not found' };
		}

		const gameId = event.params.id;
		let game = await Game_Model.findOne({ id: gameId });

		if (!game) {
			return { status: 404, error: 'Game not found' };
		}

		if (game.comments.length === 0) {
			return { status: 404, error: 'No comments found' };
		}

		let comment = game.comments.find((comment) => comment.id === comment_id);

		if (!comment) {
			return { status: 404, error: 'Comment not found' };
		}

		if (comment.username !== user.user.username) {
			return { status: 401, error: 'Unauthorized' };
		}

		let user_game = user.games.find((game) => game.id === gameId);

		if (!user_game) {
			return { status: 404, error: 'User game not found' };
		}

		try {
			game.comments = game.comments.filter((comment) => comment.id !== comment_id);
			user_game.comments = user_game.comments.filter((comment) => comment.id !== comment_id);

			await game.save();
			await user.save();

			return { status: 200, message: 'Comment deleted successfully' };
		} catch (error) {
			console.error('Error deleting comment:', error);
			return { status: 500, error: 'An unexpected error occurred' };
		}
	},
	add_reply: async (event) => {
		const email = event.cookies.get('email');
		const formData = await event.request.formData();
		const comment_id = formData.get('comment_id') as string;
		const reply = formData.get('reply') as string;
		const user = await User_Model.findOne({ 'user.email': email });
		let game = await Game_Model.findOne({ id: event.params.id });
		let user_game = user?.games.find((game) => game.id === event.params.id);

		if (!user) {
			return { status: 401, error: 'User not found' };
		}

		if (!game) {
			return { status: 404, error: 'Game not found' };
		}

		try {
			const id = Math.random().toString(36).slice(2);

			game.comments.forEach((comment) => {
				if (comment.id === comment_id) {
					comment.replies.push({
						id,
						username: user?.user.username,
						date: new Date(),
						content: reply,
						reactions: []
					});
				}
			});

			await game.save();

			user_game?.comments.forEach((comment) => {
				if (comment.id === comment_id) {
					comment.replies.push({
						id,
						username: user?.user.username,
						date: new Date(),
						content: reply,
						reactions: []
					});
				}
			});

			await user.save();
		} catch (error) {
			return { status: 500, error: 'An unexpected error occurred' };
		}
	},
	edit_reply: async (event) => {},
	delete_reply: async (event) => {
		const email = event.cookies.get('email');
		const formData = await event.request.formData();
		const comment_id = formData.get('comment_id') as string;
		const reply_id = formData.get('reply_id') as string;

		if (!email) {
			return { status: 400, error: 'Email not found' };
		}

		const user = await User_Model.findOne({ 'user.email': email });

		if (!user) {
			return { status: 401, error: 'User not found' };
		}

		const gameId = event.params.id;
		let game = await Game_Model.findOne({ id: gameId });

		if (!game) {
			return { status: 404, error: 'Game not found' };
		}

		if (game.comments.length === 0) {
			return { status: 404, error: 'No comments found' };
		}

		let comment = game.comments.find((comment) => comment.id === comment_id);

		if (!comment) {
			return { status: 404, error: 'Comment not found' };
		}

		let reply = comment.replies.find((reply) => reply.id === reply_id);

		if (!reply) {
			return { status: 404, error: 'Reply not found' };
		}

		if (reply.username !== user.user.username) {
			return { status: 401, error: 'Unauthorized' };
		}

		let user_game = user.games.find((game) => game.id === gameId);

		if (!user_game) {
			return { status: 404, error: 'User game not found' };
		}

		try {
			comment.replies = comment.replies.filter((reply) => reply.id !== reply_id);
			user_game.comments.forEach((userComment) => {
				if (userComment.id === comment_id) {
					userComment.replies = userComment.replies.filter((reply) => reply.id !== reply_id);
				}
			});

			await game.save();
			await user.save();

			return { status: 200, message: 'Reply deleted successfully' };
		} catch (error) {
			console.error('Error deleting reply:', error);
			return { status: 500, error: 'An unexpected error occurred' };
		}
	}
};
