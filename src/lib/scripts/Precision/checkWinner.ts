import { resetGame } from './resetGame';
import type { Team } from './types';

/**
 * Checks if there is a winner among the teams based on their points.
 * If there is only one team with points, it prompts a confirmation message
 * and resets the game if confirmed.
 *
 * @param teams - An array of teams.
 * @param point - The number of points required to win.
 * @param range - The range of points within which a team can win.
 * @param lower_range - The lower range of points within which a team can win.
 * @param upper_range - The upper range of points within which a team can win.
 * @param currentTeamIndex - The index of the current team.
 * @param color - The color of the current team.
 * @param currentTeam - The current team object.
 * @param MetersToPlay - The number of meters to play.
 */
export function checkWinner(
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
	const teamsWithPoints = teams.filter((t) => t.points > 0);
	if (teamsWithPoints.length === 1) {
		const winner = teamsWithPoints[0].color;
		const confirmed = confirm(`The winner is Team ${winner}!`);

		if (confirmed) {
			resetGame(
				teams,
				point,
				range,
				lower_range,
				upper_range,
				currentTeamIndex,
				color,
				currentTeam,
				MetersToPlay
			);
		}
	}
}
