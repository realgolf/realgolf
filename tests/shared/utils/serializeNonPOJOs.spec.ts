import { serializeNonPOJOs } from '../../../src/lib/shared/utils/serializeNonPOJOs';

describe('serializeNonPOJOs', () => {
	it('should serialize non-POJO objects', () => {
		// Define the input value
		const value = {
			name: 'John Doe',
			age: 30,
			isActive: true,
			createdAt: '2024-01-03T23:55:55.083Z',
			_id: '65db7264db57a15bf9e179b8'
		};

		// Call the function
		const result = serializeNonPOJOs(value);

		// Check the output
		expect(result).toEqual(value);
		expect(result).not.toBe(value);
	});
});
