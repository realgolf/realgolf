import { resetGame } from '../../../../src/lib/scripts/Exact/resetGame';

describe('resetGame', () => {
	it('should reset the game', () => {
		// Define the input values
		const teams = [
			{ data: [], points: 0, color: 'red' },
			{ data: [], points: 0, color: 'blue' }
		];
		const pointsByTeam = {
			red: { set: jest.fn(), update: jest.fn(), subscribe: jest.fn() },
			blue: { set: jest.fn(), update: jest.fn(), subscribe: jest.fn() }
		};
		const userInput = 10;
		const clickedCellsCount = 5;
		const currentTeamIndex = 1;
		const currentTeam = teams[currentTeamIndex];
		const color = 'blue';

		// Call the function
		const result = resetGame(
			teams,
			pointsByTeam,
			userInput,
			clickedCellsCount,
			currentTeamIndex,
			currentTeam,
			color
		);

		// Check the output
		expect(result.userInput).toBe(20);
		expect(result.clickedCellsCount).toBe(0);
		expect(result.currentTeamIndex).toBe(0);
		expect(result.currentTeam).toBe(teams[0]);
		expect(result.color).toBe(teams[0].color);
		expect(pointsByTeam.red.set).toHaveBeenCalledWith(0);
		expect(pointsByTeam.blue.set).toHaveBeenCalledWith(0);
		// Add additional assertions for other properties if needed
	});
});
