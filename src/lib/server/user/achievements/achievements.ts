import type { User } from '../types';
import { check_bronze_requirements } from './game_master/check_bronze_requirements';
import { check_first_unlock } from './game_master/check_first_unlocked';
import { check_gold_requirements } from './game_master/check_gold_requirements';
import { check_platinum_requirements } from './game_master/check_platinum_requirements';
import { check_silver_requirements } from './game_master/check_silver_requirements';

/**
 * Checks the achievements for a user based on their game progress.
 *
 * @param user - The user object containing achievements and game progress.
 * @param gameId - The ID of the game being checked for achievements.
 * @returns A promise that resolves once the achievements have been checked and updated.
 */
export async function check_achievement(user: User, gameId: string) {
	const achievements = user.achievements;
	const total_games = user.total_games;
	const user_name = user.user.username;

	check_first_unlock(total_games, achievements, user_name, gameId);
	check_bronze_requirements(total_games, achievements, gameId);
	check_silver_requirements(total_games, achievements, gameId);
	check_gold_requirements(total_games, achievements, gameId);
	check_platinum_requirements(total_games, achievements, gameId);

	user.achievements = achievements;
}
