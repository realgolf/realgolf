/**
 * Assigns a name to a team based on the input string.
 *
 * @param teams - The input string representing the teams.
 * @returns The name assigned to the team.
 */
export function asignNameToTeam(teams: string) {
	let name: string;

	if (teams === '4winning_2_teams') {
		name = '4 Winning 2 Players';
	} else if (teams === '4winning_3_teams') {
		name = '4 Winning 3 Players';
	} else if (teams === '4winning_4_teams') {
		name = '4 Winning 4 Players';
	} else if (teams === 'exact_2_teams') {
		name = 'Exact 2 Players';
	} else if (teams === 'exact_3_teams') {
		name = 'Exact 3 Players';
	} else if (teams === 'exact_4_teams') {
		name = 'Exact 4 Players';
	} else {
		name = 'Undefined';
	}

	return name;
}
