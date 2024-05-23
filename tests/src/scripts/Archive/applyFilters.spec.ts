import { Data } from '$lib/scripts/Archive/types';
import { applyFilters } from '../../../../src/lib/scripts/Archive/applyFilters';
import { filteredGames } from '../../../../src/lib/scripts/Archive/types';

describe('applyFilters', () => {
	let filteredGames: filteredGames;
	let data: Data;

	beforeEach(() => {
		jest.clearAllMocks();

		filteredGames = [
			{
				id: '7c4d9894-8dfa-4ea0-82ea-223b1a383b23',
				name: '4 Winning 2 Teams',
				teams: '4winning_2_teams',
				date: '2024-02-13',
				data: '[{"color":"red","data":["5-6","6-2","5-5","6-0","6-3","5-2","5-1","4-6"]},{"color":"blue","data":["4-4","4-1","4-0","3-5","4-5","4-3","3-6","4-2"]}]',
				is_over: true
			},
			{
				id: '2a48ffbe-caff-4573-8fd5-4ccad3c43820',
				name: '4 Winning 2 Teams',
				teams: '4winning_2_teams',
				date: '2024-02-13',
				data: '[{"color":"red","data":["4-5","5-3","4-1","5-5","5-2","5-1","3-4","5-0"]},{"color":"blue","data":["4-6","2-4","3-6","4-0","4-4","4-3","2-6"]}]',
				is_over: true
			},
			{
				id: '695e5ff5-0f19-4565-a308-4d433f1d6e4e',
				name: '4 Winning 2 Teams',
				teams: '4winning_2_teams',
				date: '2024-02-17',
				data: '[{"color":"red","data":["4-0","3-5","4-5","5-0"]},{"color":"blue","data":["2-5","5-4","5-3","5-1","5-2"]}]',
				is_over: true
			},
			{
				id: '31efe44a-2dde-4084-b770-713c156475b4',
				name: 'Exact 2 Teams',
				teams: 'exact_2_teams',
				date: '2024-02-17',
				data: '{"red":{"points":9,"shots":10},"blue":{"points":9,"shots":11}}',
				is_over: true
			}
		];

		data = { games: filteredGames } as Data;
	});

	it('should filter games based on search term', () => {
		const searchTerm = '4 Winning';
		const selectedTeam = '';

		const result = applyFilters(searchTerm, filteredGames, data, selectedTeam);

		expect(result).toEqual([
			{
				id: '695e5ff5-0f19-4565-a308-4d433f1d6e4e',
				name: '4 Winning 2 Teams',
				teams: '4winning_2_teams',
				date: '2024-02-17',
				data: '[{"color":"red","data":["4-0","3-5","4-5","5-0"]},{"color":"blue","data":["2-5","5-4","5-3","5-1","5-2"]}]',
				is_over: true
			},
			{
				id: '2a48ffbe-caff-4573-8fd5-4ccad3c43820',
				name: '4 Winning 2 Teams',
				teams: '4winning_2_teams',
				date: '2024-02-13',
				data: '[{"color":"red","data":["4-5","5-3","4-1","5-5","5-2","5-1","3-4","5-0"]},{"color":"blue","data":["4-6","2-4","3-6","4-0","4-4","4-3","2-6"]}]',
				is_over: true
			},
			{
				id: '7c4d9894-8dfa-4ea0-82ea-223b1a383b23',
				name: '4 Winning 2 Teams',
				teams: '4winning_2_teams',
				date: '2024-02-13',
				data: '[{"color":"red","data":["5-6","6-2","5-5","6-0","6-3","5-2","5-1","4-6"]},{"color":"blue","data":["4-4","4-1","4-0","3-5","4-5","4-3","3-6","4-2"]}]',
				is_over: true
			}
		]);
	});

	it('should filter games based on selected team', () => {
		const searchTerm = '';
		const selectedTeam = 'exact_2_teams';

		const result = applyFilters(searchTerm, filteredGames, data, selectedTeam);

		expect(result).toEqual([
			{
				id: '31efe44a-2dde-4084-b770-713c156475b4',
				name: 'Exact 2 Teams',
				teams: 'exact_2_teams',
				date: '2024-02-17',
				data: '{"red":{"points":9,"shots":10},"blue":{"points":9,"shots":11}}',
				is_over: true
			}
		]);
	});

	it('should return all games when no search term or selected team is provided', () => {
		const searchTerm = '';
		const selectedTeam = '';

		const result = applyFilters(searchTerm, filteredGames, data, selectedTeam);

		expect(result).toEqual(filteredGames);
	});
});
