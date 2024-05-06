import { open_dialog } from '$lib/components/Global/Dialog.svelte';
import { restartGame } from './restartGame';
import { showNumberofClicks } from './showNumberOfClicks';
import type { Team } from './types';

/**
 * Test when a cell has been hit four times by a team.
 * @param cellId - The ID of the cell that has been hit four times.
 * @param teamColor - The color of the team that hit the cell.
 * @param hitCounts - The number of hits for each cell or a record of hit counts.
 * @param teams - An array of teams.
 * @param numberOfClicks - The number of clicks.
 * @param currentTeamIndex - The index of the current team.
 * @param currentTeam - The current team.
 * @param color - The color.
 * @param changeTeam - A function to change the current team.
 */
export function FourTimesWin(
	cellId: string,
	teamColor: string,
	hitCounts: number | Record<string, number>,
	teams: Team[],
	numberOfClicks: string,
	currentTeamIndex: number,
	currentTeam: Team,
	color: string,
	changeTeam: () => void
) {
	showNumberofClicks(hitCounts, numberOfClicks);

	open_dialog({
		text: `Cell ${cellId} has been hit four times by ${teamColor} team! </br> Do you want to restart the game?`,
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
