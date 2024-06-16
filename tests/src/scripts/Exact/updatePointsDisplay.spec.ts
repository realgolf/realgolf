import { Team } from '../../../../src/lib/scripts/Exact/types';
import { updatePointsDisplay } from '../../../../src/lib/scripts/Exact/updatePointsDisplay';

describe('updatePointsDisplay', () => {
	let mockDisplayElement: HTMLElement;

	beforeEach(() => {
		mockDisplayElement = document.createElement('div');
		mockDisplayElement.id = 'points_display';
		jest.spyOn(document, 'querySelector').mockReturnValue(mockDisplayElement);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should update the points display with the points of each team', () => {
		const teams: Team[] = [
			{ pos: 1, name: 'Red', color: 'red', data: [], points: 10, shots: 0 },
			{ pos: 2, name: 'Blue', color: 'blue', data: [], points: 20, shots: 0 }
		];

		const result = updatePointsDisplay(teams);

		expect(mockDisplayElement.innerHTML).toBe('red team points: 10<br>blue team points: 20');
		expect(result).toBe('red team points: 10<br>blue team points: 20');
	});

	it('should handle an empty teams array', () => {
		const teams: Team[] = [];

		const result = updatePointsDisplay(teams);

		expect(mockDisplayElement.innerHTML).toBe('');
		expect(result).toBe('');
	});

	it('should do nothing if the points display element is not found', () => {
		jest.spyOn(document, 'querySelector').mockReturnValue(null);

		const teams = [{ pos: 1, name: 'Red', color: 'red', data: [], points: 10, shots: 0 }];

		const result = updatePointsDisplay(teams);

		expect(result).toBeUndefined();
	});
});
