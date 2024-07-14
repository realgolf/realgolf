import { User_Model } from '$lib/server/user/models';
import { Game_Model } from '../models';

export async function delete_comment(email: string | undefined, event: any, comment_id: string) {
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
}
