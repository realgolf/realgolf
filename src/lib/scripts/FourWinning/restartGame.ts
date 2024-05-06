import Cookies from 'js-cookie';
import type { Team } from './types';
import { updateTeamTurn } from './updateTeamTurn';

/**
 * Restarts the game by resetting various game-related variables and elements.
 * @param teams - An array of Team objects representing the teams in the game.
 * @param hitCounts - The hit counts for each team, either as a number or as a record of team names and hit counts.
 * @param numberOfClicks - The number of clicks made in the game.
 * @param currentTeamIndex - The index of the current team in the teams array.
 * @param currentTeam - The current team object.
 * @param color - The color associated with the current team.
 * @param changeTeam - A function to change the current team.
 * @returns An object containing the updated hitCounts, numberOfClicks, currentTeamIndex, currentTeam, and color.
 */
export function restartGame(
	teams: Team[],
	hitCounts: number | Record<string, number>,
	numberOfClicks: string,
	currentTeamIndex: number,
	currentTeam: Team,
	color: string,
	changeTeam: () => void
) {
	Cookies.remove(`game_over_4winning_${teams.length}_teams`);
	const input = document.getElementById('distance') as HTMLInputElement;

	if (input) {
		input.value = '';
	}

	localStorage.removeItem(`4winning_${teams.length}_teams`);

	teams.forEach((team) => {
		team.data = [];
	});

	const cells = document.querySelectorAll('.meters');
	cells.forEach((cell) => {
		(cell as HTMLElement).style.backgroundColor = '';
	});

	hitCounts = {};
	numberOfClicks = undefined as unknown as string;
	currentTeamIndex = 0;
	currentTeam = teams[currentTeamIndex];
	color = currentTeam.color;
	changeTeam();
	updateTeamTurn(color);

	return { hitCounts, numberOfClicks, currentTeamIndex, currentTeam, color };
}
