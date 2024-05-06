import { check_achievement } from '$lib/server/user/achievements/achievements';
import { User_Model } from '$lib/server/user/models'; // Assuming you have a User model
import type { User } from '$lib/server/user/types';
import { v4 as uuidv4 } from 'uuid';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const email = event.cookies.get('email');

	const user = await User_Model?.findOne({ 'user.email': email });

	if (!user) {
		return { status: 400, error: new Error('User could not be found') };
	} else {
		const measurement_unit = user.user?.measurement_units;
		return { measurement_unit };
	}
};

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const game_over_cookie = event.cookies.get('game_over_4winning_4_teams');
		const gameIsOver = game_over_cookie === 'true' ? true : false;

		const raw_team_data = data.get('team_data') as string;

		let team_data;
		try {
			team_data = JSON.parse(raw_team_data);
		} catch (jsonParseError) {
			console.error('Error parsing team_data:', jsonParseError);
			return {
				status: 400,
				body: JSON.stringify({ error: 'Invalid team_data JSON' })
			};
		}
		const email = event.cookies.get('email');

		try {
			// Find the user
			const user = await User_Model?.findOne({ 'user.email': email });

			if (!user) {
				return {
					status: 404,
					body: JSON.stringify({ error: 'User not found' })
				};
			}

			// Generate a unique ID for the game
			const gameId = uuidv4();

			const today = new Date();
			const year = today.getFullYear();
			const month = (today.getMonth() + 1).toString().padStart(2, '0');
			const day = today.getDate().toString().padStart(2, '0');
			const formattedDate = `${year}-${month}-${day}`;

			// Add the game to the user
			if (user.games) {
				user.games.push({
					id: gameId,
					name: '4 Winning 4 Teams',
					teams: '4winning_4_teams',
					date: formattedDate,
					data: JSON.stringify(team_data),
					is_over: gameIsOver
				});

				user.total_games += 1;
				const user_copy = user as User;
				check_achievement(user_copy, gameId);
			}

			// Save the user with the new game
			await user.save();

			event.cookies.delete('game_over_4winning_4_teams', { path: '/' });

			return {
				status: 200,
				body: JSON.stringify({ message: 'Game saved successfully' })
			};
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				body: JSON.stringify({ error: 'Error saving game' })
			};
		}
	}
};
