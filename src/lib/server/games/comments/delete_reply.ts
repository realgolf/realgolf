import { User_Model } from '$lib/server/user/models';
import { Game_Model } from '../models';

export async function delete_reply(
	event: any,
	email: string,
	comment_id: string,
	reply_id: string
) {
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
