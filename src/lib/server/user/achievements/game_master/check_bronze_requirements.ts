import type { Achievements } from '../../interface/Achievements';

//! Requires 16 played games
/**
 * Checks if the bronze requirements for the "Game Master" achievement are met.
 *
 * @param total_games The total number of games played.
 * @param achievements The list of achievements.
 * @param gameId The ID of the game being checked.
 */
export function check_bronze_requirements(
	total_games: number,
	achievements: Achievements[],
	gameId: string
) {
	if (total_games == 16) {
		if (achievements) {
			const game_master = achievements.find((achievement) => achievement.title === 'Game Master');

			if (game_master?.history) {
				game_master.is_unlocked.bronze_unlocked = true;
				game_master.history.bronze_unlocked_date = new Date();
				game_master.history.bronze_unlocked_game = gameId;
			}
		}
	}
}
