import type { Team } from '$lib/scripts/Exact/types';
import { findWinner } from '../../../../src/lib/scripts/Exact/findWinner';

describe('findWinner', () => {
	it('should return the color of the team with the highest points', () => {
		// Arrange
		const teams: Team[] = [
			{ pos: 1, name: 'Red', color: 'red', data: [], points: 10, shots: 0 },
			{ pos: 2, name: 'Blue', color: 'blue', data: [], points: 15, shots: 0 },
			{ pos: 3, name: 'Green', color: 'green', data: [], points: 8, shots: 0 }
		];

		// Act
		const result = findWinner(teams);

		// Assert
		expect(result).toBe('blue');
	});

	it('should handle tie condition and return "Tie"', () => {
		// Arrange
		const teams: Team[] = [
			{ pos: 1, name: 'Red', color: 'red', data: [], points: 10, shots: 0 },
			{ pos: 2, name: 'Blue', color: 'blue', data: [], points: 15, shots: 0 },
			{ pos: 3, name: 'Green', color: 'green', data: [], points: 15, shots: 0 }
		];

		// Act
		const result = findWinner(teams);

		// Assert
		expect(result).toBe('Tie');
	});

	it('should return "Tie" if no team has any points', () => {
		// Arrange
		const teams: Team[] = [
			{ pos: 1, name: 'Red', color: 'red', data: [], points: 0, shots: 0 },
			{ pos: 2, name: 'Blue', color: 'blue', data: [], points: 0, shots: 0 },
			{ pos: 3, name: 'Green', color: 'green', data: [], points: 0, shots: 0 }
		];

		// Act
		const result = findWinner(teams);

		// Assert
		expect(result).toBe('Tie');
	});

	// Add more test cases as needed
});
