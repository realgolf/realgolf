import Cookies from 'js-cookie';
import type { Writable } from 'svelte/store';
import type { Team } from './types';
import { updatePointsDisplay } from './updatePointsDisplay';
import { updateTeamTurn } from './updateTeamTurn';

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
export function resetGame(
	teams: Team[],
	pointsByTeam: Record<string, Writable<number>>,
	userInput: number,
	clickedCellsCount: number,
	currentTeamIndex: number,
	currentTeam: Team,
	color: string
) {
	Cookies.remove(`game_over_exact_${teams.length}_teams`);
	localStorage.removeItem(`exact_${teams.length}_teams`);

	teams.forEach((team) => {
		team.points = 0;
		team.data = [];
		pointsByTeam[team.color].set(0);
	});

	userInput = 20;
	clickedCellsCount = 0;
	currentTeamIndex = 0;
	currentTeam = teams[currentTeamIndex];
	color = currentTeam.color;

	const cells = document.querySelectorAll('.meters');
	cells.forEach((cell) => {
		(cell as HTMLElement).style.backgroundColor = '';
	});

	updatePointsDisplay(teams);
	updateTeamTurn(color);

	return { userInput, clickedCellsCount, currentTeamIndex, currentTeam, color, cells };
}
