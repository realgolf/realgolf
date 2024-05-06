import Cookies from 'js-cookie';
import type { Team } from './types';
import { updateTeamTurn } from './updateTeamTurn';

/**
 * Restarts the game when the User clicks the Restart Game Button by resetting the necessary variables and elements.
 * @param teams - An array of teams.
 * @param hitCounts - A record of hit counts.
 * @param numberOfClicks - The number of clicks.
 * @param currentTeamIndex - The index of the current team.
 * @param currentTeam - The current team.
 * @param color - The color of the current team.
 * @returns An object containing the updated hitCounts, numberOfClicks, currentTeamIndex, currentTeam, and color.
 */
export function restartGame_Btn(
	teams: Team[],
	hitCounts: Record<string, number>,
	numberOfClicks: string,
	currentTeamIndex: number,
	currentTeam: Team,
	color: string
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
	updateTeamTurn(color);

	return { hitCounts, numberOfClicks, currentTeamIndex, currentTeam, color };
}
