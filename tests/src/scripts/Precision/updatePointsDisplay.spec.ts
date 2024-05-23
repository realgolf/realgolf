// Import the function to test
import type { Team } from '../../../../src/lib/scripts/Precision/types'; // Adjust the import path as needed
import { updatePointsDisplay } from '../../../../src/lib/scripts/Precision/updatePointsDisplay';

describe('updatePointsDisplay', () => {
	let mockDisplayElement: HTMLElement;

	beforeEach(() => {
		// Create a mock display element as an HTML element
		mockDisplayElement = document.createElement('div');
		mockDisplayElement.id = 'points_display';

		// Spy on document.querySelector and return the mock display element
		jest.spyOn(document, 'querySelector').mockReturnValue(mockDisplayElement);
	});

	afterEach(() => {
		// Clear all mocks after each test
		jest.clearAllMocks();
	});

	it('should update the points display with the points of each team', () => {
		const teams: Team[] = [
			{ color: 'Red', points: 10, distance: null as unknown as number },
			{ color: 'Blue', points: 20, distance: null as unknown as number }
		];

		const result = updatePointsDisplay(teams);

		expect(mockDisplayElement.innerHTML).toBe('Red team points: 10<br>Blue team points: 20');
		expect(result).toBe('Red team points: 10<br>Blue team points: 20');
	});

	it('should handle an empty teams array', () => {
		const teams: Team[] = [];

		const result = updatePointsDisplay(teams);

		expect(mockDisplayElement.innerHTML).toBe('');
		expect(result).toBe('');
	});

	it('should do nothing if the points display element is not found', () => {
		// Mock document.querySelector to return null
		jest.spyOn(document, 'querySelector').mockReturnValue(null);

		const teams: Team[] = [{ color: 'Red', points: 10, distance: null as unknown as number }];

		const result = updatePointsDisplay(teams);

		expect(result).toBeUndefined();
	});
});
