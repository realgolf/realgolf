import { deductPoints } from '../../../../src/lib/scripts/Precision/deductPoints';
import { Team } from '../../../../src/lib/scripts/Precision/types';

describe('deductPoints', () => {
	it('should deduct points from the current team and call changeTeam', () => {
		const MetersToPlay = 100;
		const currentTeam = {
			color: 'red',
			distance: 50,
			points: 10
		};
		const teams: Team[] = [];
		const point = 5;
		const range = 10;
		const lower_range = 0;
		const upper_range = 20;
		const currentTeamIndex = 0;
		const color = 'blue';
		const changeTeam = () => {};

		const result = deductPoints(
			MetersToPlay,
			currentTeam,
			changeTeam,
			teams,
			point,
			range,
			lower_range,
			upper_range,
			currentTeamIndex,
			color
		);

		expect(result.difference).toBe(50);
		expect(result.pointsToDeduct).toBe(50);
		expect(result.currentTeam.points).toBe(-40);
	});
});
