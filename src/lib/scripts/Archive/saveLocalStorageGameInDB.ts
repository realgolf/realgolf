import { asignNameToTeam } from '$lib/shared/utils/asignNameToTeam';

/**
 * Saves the data from local storage to the database.
 * Sets the name, team, and local storage data in the form and submits it.
 * @param {string} teams - The teams for which the data will be saved.
 */
export function saveLocalStorageGameInDB(teams: string) {
	const name = document.getElementById('name_LStoDB') as HTMLInputElement;
	const team = document.getElementById('team_LStoDB') as HTMLInputElement;
	const localStorageData = document.getElementById('localStorageData_LStoDB') as HTMLInputElement;

	if (name && team && localStorageData) {
		name.value = asignNameToTeam(teams);
		team.value = teams;
		localStorageData.value = localStorage.getItem(teams) as string;
	}

	const form = document.getElementById('saveLocalStorageToDB') as HTMLFormElement;
	form.submit();
}
