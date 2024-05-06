import { User_Model } from '$lib/server/user/models';
import type { Actions } from '@sveltejs/kit';
import type { Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export async function load(event): Promise<unknown> {
	const email = event.cookies.get('email');

	const user = await User_Model?.findOne({ 'user.email': email });

	const measurement_units = user?.user?.measurement_units;

	if (!user) {
		return { status: 400, error: new Error('User could not be found') };
	} else {
		const games: games[] = user.games.map((game) => {
			const gameCopy = JSON.parse(JSON.stringify(game));
			delete gameCopy._id; // Remove the _id field
			return gameCopy;
		});
		return { games, measurement_units };
	}
}

export const actions: Actions = {
	delete_all: async (event) => {
		const email = event.cookies.get('email');

		try {
			const user = await User_Model?.findOne({ 'user.email': email });

			if (!user) {
				return {
					status: 404,
					error: 'User not found'
				};
			}

			if (user) {
				user.games = [] as unknown as Types.DocumentArray<games>;
			}

			await user.save();

			return {
				status: 200,
				message: 'Games deleted succesfully'
			};
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				error: 'Error saving game'
			};
		}
	},
	delete_game: async (event) => {
		const email = event.cookies.get('email');
		const user = await User_Model?.findOne({ 'user.email': email });
		const data = await event.request.formData();
		const id = data.get('id') as string;
		const games = user?.games;

		if (user) {
			if (games) {
				const updatedGames = games.filter((game) => game.id !== id);
				user.games = updatedGames as unknown as typeof user.games;
				await user.save();
			}
		}
	},
	rename: async (event) => {
		const email = event.cookies.get('email');
		const user = await User_Model?.findOne({ 'user.email': email });
		const data = await event.request.formData();
		const id = data.get('id') as string;
		const name = (data.get('name') as string)?.trim();
		const games = user?.games;

		if (games) {
			const game = games.find((game) => game.id === id);

			if (game) {
				game.name = name;
				await user.save();
			}
		}
	},
	saveLocalStorageGameInDB: async (event) => {
		const email = event.cookies.get('email');
		const data = await event.request.formData();
		const name = data.get('name') as string;
		const team = data.get('team') as string;
		const local_storage_data = data.get('localStorageData') as string;

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
					name: name,
					teams: team,
					date: formattedDate,
					data: JSON.stringify(local_storage_data)
				});
			}

			// Save the user with the new game
			await user.save();

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
