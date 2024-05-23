import { capitalizeFirstLetter } from '../../../src/lib/shared/utils/capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
	it('should capitalize the first letter of a valid string', () => {
		// Arrange
		const input = 'hello';
		const expectedOutput = 'Hello';

		// Act
		const result = capitalizeFirstLetter(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "undefined" for an undefined input', () => {
		// Arrange
		const input = undefined;
		const expectedOutput = 'undefined';

		// Act
		const result = capitalizeFirstLetter(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "undefined" for an empty string', () => {
		// Arrange
		const input = '';
		const expectedOutput = 'undefined';

		// Act
		const result = capitalizeFirstLetter(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	it('should return "undefined" for a non-string input', () => {
		// Arrange
		const input = 123 as unknown as string;
		const expectedOutput = 'undefined';

		// Act
		const result = capitalizeFirstLetter(input);

		// Assert
		expect(result).toBe(expectedOutput);
	});
});
