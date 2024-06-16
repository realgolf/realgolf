import Cookies from 'js-cookie';
import type { Team } from './types';

/**
 * Resets the game by clearing team data, points, and updating the UI.
 *
 * @param teams - An array of teams.
 * @param pointsByTeam - A record of points by team color.
 * @param userInput - The user input.
 * @param clickedCellsCount - The count of clicked cells.
 * @param currentTeamIndex - The index of the current team.
 * @param currentTeam - The current team.
 * @param color - The color of the current team.
 * @returns An object containing the updated values of userInput, clickedCellsCount, currentTeamIndex, currentTeam, color, and cells.
 */
export function resetGame(teams: Team[]) {
	Cookies.remove(`game_over_exact_${teams.length}_teams`);
	localStorage.removeItem(`exact_${teams.length}_teams`);

	window.location.href = '/dashboard/games/Exact';
}
