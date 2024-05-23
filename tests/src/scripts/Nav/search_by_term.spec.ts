import { User } from '$lib/server/user/types';
import { search_by_term } from '../../../../src/lib/scripts/Nav/search_by_term';

let all_users: User[];

describe('search_by_term', () => {
	beforeEach(() => {
		all_users = [
			{
				user: {
					email: 'john@john.john',
					password: 'john',
					name: 'John',
					username: 'john'
				}
			},
			{
				user: {
					email: 'jane@john.john',
					password: 'jane',
					name: 'Jane',
					username: 'jane'
				}
			}
		] as User[];
	});

	it('should return an empty array if all_users is not an array', () => {
		// Arrange
		all_users = [];
		const search_term = 'tom';

		// Act
		const result = search_by_term(all_users, search_term);

		// Assert
		expect(result).toEqual([]);
	});

	it('should return an empty array if no users match the search term', () => {
		const search_term = 'peter';

		// Act
		const result = search_by_term(all_users, search_term);

		// Assert
		expect(result).toEqual([]);
	});

	it('should return an array of users that match the search term', () => {
		const search_term = 'j';

		// Act
		const result = search_by_term(all_users, search_term);

		// Assert
		expect(result).toEqual([
			{
				user: {
					email: 'john@john.john',
					password: 'john',
					name: 'John',
					username: 'john'
				}
			},
			{
				user: {
					email: 'jane@john.john',
					password: 'jane',
					name: 'Jane',
					username: 'jane'
				}
			}
		]);
	});
});
