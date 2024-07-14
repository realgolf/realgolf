import { User_Model } from '$lib/server/user/models';
import { Game_Model } from '../models';

export async function add_reply(event: any, email: string, comment_id: string, reply: string) {
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
}
