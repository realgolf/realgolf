export async function add_comments(user: any, game: any, comment: string, user_game: any) {
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
}
