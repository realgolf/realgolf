/**
 * Updates the team turn display with the specified color.
 *
 * @param color - The color of the team whose turn it is.
 * @returns The updated innerHTML of the team turn display element.
 */
export function updateTeamTurn(color: string) {
	const teamTurnDisplay = document.getElementById('team_turn_display');
	if (teamTurnDisplay) {
		teamTurnDisplay.innerHTML = `Current Team Turn: ${color}`;
	}

	return teamTurnDisplay?.innerHTML;
}
