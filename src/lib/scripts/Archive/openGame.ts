import { open_dialog } from '$lib/components/Global/Dialog.svelte';
import { fillLocalStorageAndRedirectUser } from './fillLocalStorageAndRedirectUser';
import { saveLocalStorageGameInDB } from './saveLocalStorageGameInDB';

/**
 * Opens a game and performs necessary actions based on the game data and teams.
 * If the local storage for the teams is empty, it fills the local storage and redirects the user.
 * If the local storage is not empty, it prompts the user with a dialog to decide whether to delete the unsaved game, save it in the database, or stay on the current page.
 *
 * @param {string} gameData - The game data.
 * @param {string} teams - The teams.
 */
export function openGame(gameData: string, teams: string) {
	const local_storage_game = localStorage.getItem(teams);

	if (local_storage_game == null) {
		fillLocalStorageAndRedirectUser(teams, gameData);
	} else {
		open_dialog({
			text: 'Your storage is full. You have to decide.',
			modal: true,
			confirm: {
				text: 'Delete unsaved game?',
				action: () => {
					localStorage.removeItem(teams);
					fillLocalStorageAndRedirectUser(teams, gameData);
				}
			},
			save: {
				text: 'Save in Database',
				action: async () => {
					saveLocalStorageGameInDB(teams);
					setTimeout(() => {
						fillLocalStorageAndRedirectUser(teams, gameData);
					}, 100);
				}
			},
			cancel: {
				text: 'Stay here.',
				action: () => {}
			}
		});
	}
}
