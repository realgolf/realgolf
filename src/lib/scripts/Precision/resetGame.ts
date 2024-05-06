import { generateRandomNumber } from './generateRandomNumber';
import type { Team } from './types';

/**
 * Resets the game by updating the teams' points, current team index, color, current team, and meters to play.
 *
 * @param teams - An array of teams.
 * @param point - The number of points to set for each team.
 * @param range - The range of meters to play.
 * @param lower_range - The lower limit of the range.
 * @param upper_range - The upper limit of the range.
 * @param currentTeamIndex - The index of the current team.
 * @param color - The color of the current team.
 * @param currentTeam - The current team object.
 * @param MetersToPlay - The number of meters to play.
 * @returns An object containing the updated values of range, currentTeamIndex, color, currentTeam, and MetersToPlay.
 */
export function resetGame(
	teams: Team[],
	point: number,
	range: number,
	lower_range: number,
	upper_range: number,
	currentTeamIndex: number,
	color: string,
	currentTeam: Team,
	MetersToPlay: number
) {
	for (const team of teams) {
		team.points = point;
	}

	range = 150;
	currentTeamIndex = 0;
	color = teams[currentTeamIndex].color;
	currentTeam = teams[currentTeamIndex];
	MetersToPlay = generateRandomNumber(range, lower_range, upper_range);

	return { range, currentTeamIndex, color, currentTeam, MetersToPlay };
}
