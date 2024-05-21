import { resetGame } from '../../../src/lib/scripts/Precision/resetGame';

describe('resetGame', () => {
	it('should reset the game', () => {
		// Define the input values
		const teams = [
			{ points: 0, color: 'red', distance: null as unknown as number },
			{ points: 0, color: 'blue', distance: null as unknown as number }
		];
		const point = 10;
		const range = 100;
		const lower_range = 0;
		const upper_range = 200;
		const currentTeamIndex = 1;
		const color = 'blue';
		const currentTeam = teams[currentTeamIndex];
		const MetersToPlay = 50;

		// Define the expected output
		const expected = {
			range: 150,
			currentTeamIndex: 0,
			color: 'red',
			currentTeam: teams[0],
			MetersToPlay: expect.any(Number)
		};

		// Call the function
		const result = resetGame(
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

		// Check the output
		expect(result).toEqual(expected);
	});
});
