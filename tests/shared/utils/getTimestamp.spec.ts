import { get_timestamp } from '../../../src/lib/shared/utils/getTimestamp';

describe('get_timestamp', () => {
	it('should return a formatted timestamp', () => {
		// Mock the current date and time
		const mockDate = new Date('2022-01-01T12:34:56');
		jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

		// Call the function
		const result = get_timestamp();

		// Assert the expected result
		expect(result).toBe('12:34:56');

		// Restore the original Date implementation
		jest.restoreAllMocks();
	});
});
