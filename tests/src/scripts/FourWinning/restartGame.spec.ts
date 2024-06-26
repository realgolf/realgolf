import { restartGame } from '../../../../src/lib/scripts/FourWinning/restartGame';
import type { Team } from '../../../../src/lib/scripts/FourWinning/types';

describe('restartGame', () => {
	it('should restart the game', () => {
		// Define the input values
		const teams: Team[] = [
			{ pos: 1, name: '', color: 'red', data: [] },
			{ pos: 2, name: '', color: 'blue', data: [] }
		];
		const hitCounts = { red: 5, blue: 3 };
		const numberOfClicks = '10';
		const currentTeamIndex = 1;
		const currentTeam = teams[currentTeamIndex];
		const color = 'blue';
		const changeTeam = jest.fn();

		// Call the function
		const result = restartGame(
			teams,
			hitCounts,
			numberOfClicks,
			currentTeamIndex,
			currentTeam,
			color,
			changeTeam
		);

		// Check the output
		expect(result.hitCounts).toEqual({});
		expect(result.numberOfClicks).toBeUndefined();
		expect(result.currentTeamIndex).toBe(0);
		expect(result.currentTeam).toBe(teams[0]);
		expect(result.color).toBe('red');
		expect(changeTeam).toHaveBeenCalled();
	});
});
