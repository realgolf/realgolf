import type { Team } from './types';

/**
 * Updates the points of each team in the given array based on the stored data in localStorage.
 * If the stored data is available for a team's color, the points are updated from the stored data.
 * Otherwise, the points remain unchanged.
 *
 * @param teams - An array of Team objects representing the teams to update the points for.
 * @returns The updated array of Team objects with the points updated.
 */
export function updatePoints(teams: Team[]) {
	let points;
	teams.map((team) => {
		const storedData = localStorage.getItem(`exact_${teams.length}_teams`);
		const parsedData = storedData ? JSON.parse(storedData) : {};
		points = parsedData[team.color] ? parsedData[team.color].points : team.points;
		team.points = points;
	});

	return teams;
}
