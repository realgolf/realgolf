import { asignNameToTeam } from '../../../src/lib/shared/utils/asignNameToTeam';

describe('asignNameToTeam', () => {
	it('should return "4 Winning 2 Players" for input "4winning_2_teams"', () => {
		// Arrange
		const input = '4winning_2_teams';
		const expectedOutput = '4 Winning 2 Players';

		// Act
		const result = asignNameToTeam(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "4 Winning 3 Players" for input "4winning_3_teams"', () => {
		// Arrange
		const input = '4winning_3_teams';
		const expectedOutput = '4 Winning 3 Players';

		// Act
		const result = asignNameToTeam(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "4 Winning 4 Players" for input "4winning_4_teams"', () => {
		// Arrange
		const input = '4winning_4_teams';
		const expectedOutput = '4 Winning 4 Players';

		// Act
		const result = asignNameToTeam(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "Exact 2 Players" for input "exact_2_teams"', () => {
		// Arrange
		const input = 'exact_2_teams';
		const expectedOutput = 'Exact 2 Players';

		// Act
		const result = asignNameToTeam(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "Exact 3 Players" for input "exact_3_teams"', () => {
		// Arrange
		const input = 'exact_3_teams';
		const expectedOutput = 'Exact 3 Players';

		// Act
		const result = asignNameToTeam(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "Exact 4 Players" for input "exact_4_teams"', () => {
		// Arrange
		const input = 'exact_4_teams';
		const expectedOutput = 'Exact 4 Players';

		// Act
		const result = asignNameToTeam(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "Undefined" for unknown input', () => {
		// Arrange
		const input = 'unknown';
		const expectedOutput = 'Undefined';

		// Act
		const result = asignNameToTeam(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});
});
