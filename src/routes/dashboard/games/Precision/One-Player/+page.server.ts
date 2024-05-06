// Import necessary modules and types
import { User_Model } from '$lib/server/user/models';
import { getTimeThreshold } from '$lib/shared/utils/getTimeThreshold';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

// Define the load function for the page, which is executed on the server-side
export const load: PageServerLoad = async (event) => {
	// Get the user's email from the cookies
	const email = event.cookies.get('email');

	// Find the user in the database using the email
	const user = await User_Model?.findOne({ 'user.email': email });

	// If the user is not found, return an error with a 400 status code
	if (!user) {
		return { status: 400, error: new Error('User could not be found') };
	} else {
		// If the user is found, return the measurement units of the user
		const measurement_unit = user.user?.measurement_units;
		return { measurement_unit };
	}
};

// Define a function to find the user by email
const findUserByEmail = async (email: string | undefined) => {
	return await User_Model?.findOne({ 'user.email': email });
};

// Define a function to update the highscore
const updateHighscore = (
	highscoreData: { value: number; lastUpdated: Date },
	periodKey: string,
	highscore: number,
	currentTime: Date
) => {
	// Calculate the time elapsed since the last update
	const timeElapsed = currentTime.getTime() - new Date(highscoreData?.lastUpdated ?? 0).getTime();
	const timeThreshold = getTimeThreshold(periodKey);

	// If the highscore is greater than the current highscore or the time elapsed is greater than the time threshold
	if ((highscoreData?.value ?? 0) < highscore || timeElapsed > timeThreshold) {
		highscoreData.value = highscore;
		highscoreData.lastUpdated = currentTime;
	}
};

// Define a function to update the all-time highscore
const updateAllTimeHighscore = (
	allTime: { value: number; lastUpdated: Date },
	highscore: number,
	currentTime: Date
) => {
	console.log('Function running');
	console.log('Updating existing all-time high score');
	// If the highscore is greater than the current all-time highscore
	if ((allTime.value ?? 0) < highscore) {
		// Update the all-time highscore and the last updated time
		allTime.value = highscore;
		allTime.lastUpdated = currentTime;
		console.log('updated', allTime);
	}

	console.log(allTime);
};

// Define the actions for the page, which are executed on the server-side
export const actions: Actions = {
	get_add_highscore: async (event) => {
		// Get the user's email from the cookies
		const email = event.cookies.get('email');
		const data = await event.request.formData();
		const highscore = data.get('shots') as unknown as number;

		try {
			// Find the user in the database using the email
			const user = await findUserByEmail(email);

			// If the user is not found, return an error with a 404 status code
			if (!user) {
				return {
					status: 404,
					error: 'User not found'
				};
			}

			// Define the periods for the highscore
			const periods = ['daily', 'weekly', 'monthly', 'yearly'];
			const currentTime = new Date();

			// If the user has a highscore, update it
			if (user.one_player_precision_highscore) {
				for (const period of periods) {
					// Get the highscore data for the current period
					const periodKey = period as keyof typeof user.one_player_precision_highscore;
					const highscoreDataByPeriod = user.one_player_precision_highscore[periodKey];

					// If the highscore data for the current period does not have a last updated time
					if (!highscoreDataByPeriod?.lastUpdated) {
						user.one_player_precision_highscore[periodKey] = {
							value: highscore,
							lastUpdated: currentTime
						};
					} else {
						// Update the highscore and the last updated time for the current period
						updateHighscore(highscoreDataByPeriod, periodKey, highscore, currentTime);
					}
				}

				// If the user has an all-time highscore, update it
				if (user.one_player_precision_highscore.all_time) {
					console.log('All Time Highscore defined');
					// Update the all-time highscore
					updateAllTimeHighscore(
						user.one_player_precision_highscore.all_time,
						highscore,
						currentTime
					);
				}

				if (user) {
					console.log('User found');

					const highscoreHistory = user.one_player_precision_history;

					highscoreHistory.push({
						value: highscore,
						lastUpdated: currentTime
					});

					console.log(user);
				}

				// Save the updated user to the database
				await user.save();
			}

			// Return a success message
			return {
				status: 200,
				message: 'Highscore updated successfully'
			};
		} catch (error) {
			console.error(error);
			// Return an error message
			return {
				status: 500,
				error: error
			};
		}
	}
};
