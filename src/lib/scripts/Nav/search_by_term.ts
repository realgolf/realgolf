import type { User } from '$lib/server/user/types';

/**
 * Search for users by username.
 * @param all_users An array of all users.
 * @param search_term The search term.
 * @returns An array of users that match the search term.
 */
export function search_by_term(all_users: User[], search_term: string) {
	// Filter all_users based on search_term
	if (!Array.isArray(all_users)) {
		return all_users;
	}
	const searched_users = all_users.filter((user) => {
		// lowercase both strings to make search case-insensitive
		const lowerCaseSearchTerm = search_term.toLowerCase();
		const lowerCaseUsername = user.user.username.toLowerCase();
		return lowerCaseUsername.includes(lowerCaseSearchTerm);
	});
	return searched_users;
}
