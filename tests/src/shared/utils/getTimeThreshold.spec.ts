import { getTimeThreshold } from '../../../../src/lib/shared/utils/getTimeThreshold';

describe('getTimeThreshold', () => {
	it('should return the correct time threshold for daily period', () => {
		// Define the input value
		const period = 'daily';

		// Define the expected output
		const expected = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

		// Call the function
		const result = getTimeThreshold(period);

		// Check the output
		expect(result).toEqual(expected);
	});

	it('should return the correct time threshold for weekly period', () => {
		// Define the input value
		const period = 'weekly';

		// Define the expected output
		const expected = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

		// Call the function
		const result = getTimeThreshold(period);

		// Check the output
		expect(result).toEqual(expected);
	});

	it('should return the correct time threshold for monthly period', () => {
		// Define the input value
		const period = 'monthly';

		// Define the expected output
		const expected = 28 * 24 * 60 * 60 * 1000; // 28 days in milliseconds

		// Call the function
		const result = getTimeThreshold(period);

		// Check the output
		expect(result).toEqual(expected);
	});

	it('should return the correct time threshold for yearly period', () => {
		// Define the input value
		const period = 'yearly';

		// Define the expected output
		const expected = 365 * 24 * 60 * 60 * 1000; // 365 days in milliseconds

		// Call the function
		const result = getTimeThreshold(period);

		// Check the output
		expect(result).toEqual(expected);
	});

	it('should return 0 for unknown period', () => {
		// Define the input value
		const period = 'unknown';

		// Define the expected output
		const expected = 0;

		// Call the function
		const result = getTimeThreshold(period);

		// Check the output
		expect(result).toEqual(expected);
	});
});
