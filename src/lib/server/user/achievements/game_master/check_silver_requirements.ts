import type { Achievements } from '../../interface/Achievements';

//! Requires 128 played games
/**
 * Checks if the silver requirements for the "Game Master" achievement are met.
 *
 * @param total_games The total number of games played.
 * @param achievements The list of achievements.
 * @param gameId The ID of the game.
 */
export function check_silver_requirements(
	total_games: number,
	achievements: Achievements[],
	gameId: string
) {
	if (total_games == 128) {
		if (achievements) {
			const game_master = achievements.find((achievement) => achievement.title === 'Game Master');

			if (game_master?.history) {
				game_master.is_unlocked.silver_unlocked = true;
				game_master.history.silver_unlocked_date = new Date();
				game_master.history.silver_unlocked_game = gameId;
			}
		}
	}
}
