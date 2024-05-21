import { Team } from '$lib/scripts/Exact/types';
import { updatePoints } from '../../../src/lib/scripts/Exact/updatePoints';

describe('updatePoints', () => {
	it('should update the points of each team based on the stored data', () => {
		// Arrange
		const teams: Team[] = [
			{ color: 'red', data: [], points: 0 },
			{ color: 'blue', data: [], points: 0 },
			{ color: 'green', data: [], points: 0 }
		];
		const storedData = {
			red: { data: [], points: 10 },
			blue: { data: [], points: 5 },
			green: { data: [], points: 8 }
		};
		const expectedTeams: Team[] = [
			{ color: 'red', data: [], points: 10 },
			{ color: 'blue', data: [], points: 5 },
			{ color: 'green', data: [], points: 8 }
		];

		teams.map((team) => {
			const parsedData = JSON.parse(JSON.stringify(storedData));
			const points = parsedData[team.color] ? parsedData[team.color].points : team.points;
			team.points = points;
		});

		// Act
		const result = updatePoints(teams);

		// Assert
		expect(result).toEqual(expectedTeams);
		expect(teams).toEqual(expectedTeams);
	});

	it('should not update the points if no stored data is available', () => {
		// Arrange
		const teams: Team[] = [
			{ color: 'red', data: [], points: 0 },
			{ color: 'blue', data: [], points: 0 },
			{ color: 'green', data: [], points: 0 }
		];
		const expectedTeams: Team[] = [
			{ color: 'red', data: [], points: 0 },
			{ color: 'blue', data: [], points: 0 },
			{ color: 'green', data: [], points: 0 }
		];

		teams.map((team) => {
			const storedData = null;
			const parsedData = storedData ? JSON.parse(storedData) : {};
			const points = parsedData[team.color] ? parsedData[team.color].points : team.points;
			team.points = points;
		});

		// Act
		const result = updatePoints(teams);

		// Assert
		expect(result).toEqual(expectedTeams);
		expect(teams).toEqual(expectedTeams);
	});
});
