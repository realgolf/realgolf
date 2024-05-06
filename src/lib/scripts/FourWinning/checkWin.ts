import { open_dialog } from '$lib/components/Global/Dialog.svelte';
import Cookies from 'js-cookie';
import { restartGame } from './restartGame';
import type { Team, winCombination } from './types';

/**
 * Checks if any of the win combinations are achieved by the current team.
 * If a win combination is found, it opens a dialog to restart the game.
 *
 * @param winCombinations - An array of win combinations to check against.
 * @param currentTeam - The current team object.
 * @param teams - An array of all teams.
 * @param hitCounts - A record of hit counts for each cell.
 * @param numberOfClicks - The number of clicks made.
 * @param color - The color of the current team.
 * @param currentTeamIndex - The index of the current team in the teams array.
 * @param changeTeam - A function to change the current team.
 * @returns `false` indicating that no win combination was found.
 */
export function checkWin(
	winCombinations: winCombination[],
	currentTeam: Team,
	teams: Team[],
	hitCounts: Record<string, number>,
	numberOfClicks: string,
	color: string,
	currentTeamIndex: number,
	changeTeam: () => void
) {
	for (const combination of winCombinations) {
		const { cells } = combination;
		const teamData = currentTeam.data;
		let isWinningCombination = true;
		let gameIsOver: boolean = false;

		for (const cell of cells) {
			const { outerIndex, innerIndex } = cell;
			const cellId = `${outerIndex}-${innerIndex}`;

			if (!teamData.includes(cellId)) {
				isWinningCombination = false;
				break;
			}
		}
		if (isWinningCombination) {
			gameIsOver = true;
			Cookies.set(`game_over_4winning_${teams.length}_teams`, JSON.stringify(gameIsOver), {
				expires: 1,
				path: '/'
			});
			open_dialog({
				text: `Team ${currentTeam.color} wins! Do you want to restart the game?`,
				modal: true,
				confirm: {
					text: 'Yes',
					action: () => {
						restartGame(
							teams,
							hitCounts,
							numberOfClicks,
							currentTeamIndex,
							currentTeam,
							color,
							changeTeam
						);
					}
				},
				cancel: {
					text: 'No',
					action: () => {}
				}
			});
		}
	}

	return false;
}
