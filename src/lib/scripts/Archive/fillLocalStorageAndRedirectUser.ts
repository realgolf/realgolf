import { redirect } from './redirect';

/**
 * Fills the local storage with game data and redirects the user based on the teams parameter.
 *
 * @param {string} teams - The teams parameter indicating the number of teams.
 * @param {string} gameData - The game data to be stored in the local storage.
 */

function getTeamLength(teams: string): number {
	const teamLength = teams.split('_')[1];
	return parseInt(teamLength);
}

export function fillLocalStorageAndRedirectUser(teams: string, gameData: string) {
	localStorage.setItem(teams, gameData);
	if (teams.includes('4winning')) {
		redirect(`/dashboard/games/4Winning/play?team_length=${getTeamLength(teams)}`);
	} else if (teams.includes('exact')) {
		redirect(`/dashboard/games/Exact/play?team_length=${getTeamLength(teams)}`);
	}
}
