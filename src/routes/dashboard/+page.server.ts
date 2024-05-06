import { User_Model } from '$lib/server/user/models';

export async function load(event): Promise<unknown> {
	const email = event.cookies.get('email');

	const user = await User_Model?.findOne({ 'user.email': email });

	if (!user) {
		return { status: 400, error: 'User could not be found' };
	} else {
		const one_player_precision_highscore = user?.one_player_precision_highscore;
		const games = user.games;
		const measurement_units = user.user?.measurement_units;

		let newest_game;
		let game;
		let error;

		if (games.length > 0) {
			newest_game = [...games].pop();
			if (newest_game) {
				game = {
					id: newest_game.id,
					name: newest_game.name,
					teams: newest_game.teams,
					date: newest_game.date,
					data: newest_game.data,
					is_over: newest_game.is_over
				};
			}
		} else {
			error = 'The user has no saved Game.';
		}

		const daily = {
			value: one_player_precision_highscore?.daily?.value,
			lastUpdated: one_player_precision_highscore?.daily?.lastUpdated
		};

		const weekly = {
			value: one_player_precision_highscore?.weekly?.value,
			lastUpdated: one_player_precision_highscore?.weekly?.lastUpdated
		};

		const monthly = {
			value: one_player_precision_highscore?.monthly?.value,
			lastUpdated: one_player_precision_highscore?.monthly?.lastUpdated
		};

		const yearly = {
			value: one_player_precision_highscore?.yearly?.value,
			lastUpdated: one_player_precision_highscore?.yearly?.lastUpdated
		};

		const all_time = {
			value: one_player_precision_highscore?.all_time?.value,
			lastUpdated: one_player_precision_highscore?.all_time?.lastUpdated
		};

		return {
			daily,
			weekly,
			monthly,
			yearly,
			all_time,
			game,
			measurement_units,
			error
		};
	}
}
