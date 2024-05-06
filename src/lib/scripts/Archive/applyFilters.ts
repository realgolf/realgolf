import type { Data, filteredGames } from './types';

/**
 * Applies filters to the games data based on the provided search term, selected team, and data.
 * @param searchTerm - The search term to filter the games by.
 * @param filteredGames - The array of filtered games.
 * @param data - The data containing the games.
 * @param selectedTeam - The selected team to filter the games by.
 * @returns {filteredGames} filteredGames - The filtered array of games.
 */
export function applyFilters(
	searchTerm: string,
	filteredGames: filteredGames,
	data: Data,
	selectedTeam: string
) {
	if (searchTerm !== '') {
		filteredGames = data.games.filter((game) => {
			if (game.name) {
				return (
					game.name.includes(searchTerm) ||
					new Date(game.date as string).toLocaleDateString().includes(searchTerm)
				);
			}
		});
	} else if (selectedTeam !== '') {
		filteredGames = data.games.filter((game) => game.teams === selectedTeam);
	} else {
		filteredGames = data.games;
	}

	filteredGames = filteredGames.reverse();
	return filteredGames;
}
