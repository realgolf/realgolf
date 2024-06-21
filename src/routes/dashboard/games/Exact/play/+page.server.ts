import { Game_Model } from '$lib/server/games/models';
import { check_achievement } from '$lib/server/user/achievements/achievements';
import { User_Model } from '$lib/server/user/models';
import type { User } from '$lib/server/user/types';
import { redirect } from '@sveltejs/kit';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const game_over_cookie = event.cookies.get('game_over_exact_2_teams');
		const gameIsOver = game_over_cookie === 'true' ? true : false;
		const team_length = event.url.searchParams.get('team_length') as string;

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
					type: 'local',
					owner: user.user.username,
					site: `https://realgolf.games/game/${gameId}`,
					name: `Exact ${team_length} Teams`,
					teams: `exact_${team_length}_teams`,
					date: formattedDate,
					data: JSON.stringify(team_data),
					is_over: gameIsOver
				});

				user.total_games += 1;
				const user_copy = user as User;
				check_achievement(user_copy, gameId);
			}

			// Add the game to the game db
			const game = new Game_Model({
				id: gameId,
				type: 'local',
				owner: user.user.username,
				site: `https://realgolf.games/game/${gameId}`,
				name: `Exact ${team_length} Teams`,
				teams: `exact_${team_length}_teams`,
				date: formattedDate,
				data: JSON.stringify(team_data),
				is_over: gameIsOver
			});

			// Save the user with the new game
			await user.save();
			await game.save();

			Cookies.remove(`game_over_exact_${team_length}_teams`);
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				body: JSON.stringify({ error: 'Error saving game' })
			};
		}

		throw redirect(303, '/dashboard/archive');
	}
};
