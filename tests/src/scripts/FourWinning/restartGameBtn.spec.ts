import { restartGame_Btn } from '../../../../src/lib/scripts/FourWinning/restartGameBtn';
import type { Team } from '../../../../src/lib/scripts/FourWinning/types';

describe('restartGame_Btn', () => {
	it('should reset the game state', () => {
		// Arrange
		const teams: Team[] = [
			{ pos: 1, name: '', color: 'red', data: [] },
			{ pos: 2, name: '', color: 'blue', data: [] }
		];
		const hitCounts = { red: 5, blue: 3 };
		const numberOfClicks = '10';
		const currentTeamIndex = 1;
		const currentTeam = teams[currentTeamIndex];
		const color = currentTeam.color;

		// Act
		const result = restartGame_Btn(
			teams,
			hitCounts,
			numberOfClicks,
			currentTeamIndex,
			currentTeam,
			color
		);

		// Assert
		expect(result.hitCounts).toEqual({});
		expect(result.numberOfClicks).toBeUndefined();
		expect(result.currentTeamIndex).toBe(0);
		expect(result.currentTeam).toBe(teams[0]);
		expect(result.color).toBe(teams[0].color);
	});

	it('should clear the input field', () => {
		// Arrange
		const teams: Team[] = [
			{ pos: 1, name: '', color: 'red', data: [] },
			{ pos: 2, name: '', color: 'blue', data: [] }
		];
		const hitCounts = { red: 5, blue: 3 };
		const numberOfClicks = '10';
		const currentTeamIndex = 1;
		const currentTeam = teams[currentTeamIndex];
		const color = currentTeam.color;

		// Mock the document.getElementById function
		const mockInputElement = document.createElement('input');
		mockInputElement.id = 'distance';
		mockInputElement.value = '100';
		document.getElementById = jest.fn().mockReturnValue(mockInputElement);

		// Act
		restartGame_Btn(teams, hitCounts, numberOfClicks, currentTeamIndex, currentTeam, color);

		// Assert
		expect(mockInputElement.value).toBe('');
	});

	// Add more test cases as needed
});
