import { sites } from '$lib/shared/sites';
import { User_Model } from '../models';

/**
 * Verifies if a username is valid.
 *
 * @param username - The username to be verified.
 * @returns A promise that resolves to an error message if the username is invalid, or an empty string if the username is valid.
 */
export async function verify_username(username: string): Promise<string> {
	if (!username) {
		return 'Username is required.';
	}

	if (username.length <= 1) {
		return 'Username has to be at least 2 characters.';
	}

	if (username.length > 20) {
		return 'Username cannot exceed 20 characters.';
	}

	if (/\s/.test(username)) {
		return 'Username cannot contain spaces.';
	}

	const previous_user = await User_Model?.findOne({
		'user.username': { $regex: new RegExp(username, 'i') }
	});

	if (previous_user) {
		return 'There is already an account with this username.';
	}

	const lowerCaseSites = sites.map((site) => site.toLowerCase());

	if (lowerCaseSites.includes(username.toLowerCase())) {
		return 'The username cannot be equal to one of our sites.';
	}

	return '';
}
