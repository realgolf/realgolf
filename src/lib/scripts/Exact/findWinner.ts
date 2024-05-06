import Cookies from 'js-cookie';
import type { Team } from './types';

/**
 * Finds the winner among the given teams based on their points.
 * If there is a tie, the function returns 'Tie'.
 *
 * @param teams - An array of Team objects representing the teams.
 * @returns {{winner: string}} The color of the winning team or 'Tie' if there is a tie.
 */
export function findWinner(teams: Team[]): string {
	let maxPoints = -Infinity;
	let winner = 'Tie';
	let gameIsOver: boolean = false;

	for (const team of teams) {
		if (team.points > maxPoints) {
			gameIsOver = true;
			Cookies.set(`game_over_exact_${teams.length}_teams`, JSON.stringify(gameIsOver));
			maxPoints = team.points;
			winner = team.color;
		} else if (team.points === maxPoints) {
			// Handle tie condition
			winner = 'Tie';
		}
	}

	return winner;
}
