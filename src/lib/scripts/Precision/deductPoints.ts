import { checkWinner } from './checkWinner';
import type { Team } from './types';

/**
 * Deducts points from the current team based on the difference between the meters to play and the current team's distance.
 * @param MetersToPlay The total meters to play.
 * @param currentTeam The current team object.
 * @param changeTeam A function to change the current team.
 * @param teams An array of team objects.
 * @param point The point value.
 * @param range The range value.
 * @param lower_range The lower range value.
 * @param upper_range The upper range value.
 * @param currentTeamIndex The index of the current team in the teams array.
 * @param color The color value.
 * @returns An object containing the difference, points deducted, and the updated current team.
 */
export function deductPoints(
	MetersToPlay: number,
	currentTeam: Team,
	changeTeam: () => void,
	teams: Team[],
	point: number,
	range: number,
	lower_range: number,
	upper_range: number,
	currentTeamIndex: number,
	color: string
) {
	const difference: number = MetersToPlay - currentTeam.distance;
	const pointsToDeduct = Math.abs(difference);
	currentTeam.points -= pointsToDeduct;
	changeTeam();
	checkWinner(
		teams,
		point,
		range,
		lower_range,
		upper_range,
		currentTeamIndex,
		color,
		currentTeam,
		MetersToPlay
	);

	return { difference, pointsToDeduct, currentTeam };
}
