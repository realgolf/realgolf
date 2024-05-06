import type { Team } from './types';

/**
 * Updates the points display on the webpage with the points of each team.
 *
 * @param teams - An array of team objects.
 * @returns The innerHTML of the points display element.
 */
export function updatePointsDisplay(teams: Team[]) {
	const display = document.querySelector('#points_display');
	if (display) {
		display.innerHTML = teams.map((t) => `${t.color} team points: ${t.points}`).join('<br>');
	}

	return display?.innerHTML;
}
