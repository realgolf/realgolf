import { removeLastSymbol } from '../../../src/lib/shared/utils/removeLastSymbol';

describe('removeLastSymbol', () => {
	it('should remove the last symbol from a string', () => {
		const input = 'Hello World!';
		const expectedOutput = 'Hello World';

		const result = removeLastSymbol(input);

		expect(result).toBe(expectedOutput);
	});

	it('should return an empty string if the input is an empty string', () => {
		const input = '';
		const expectedOutput = '';

		const result = removeLastSymbol(input);

		expect(result).toBe(expectedOutput);
	});

	it('should return an empty string if it contains only one character', () => {
		const input = 'A';
		const expectedOutput = '';

		const result = removeLastSymbol(input);

		expect(result).toBe(expectedOutput);
	});
});
