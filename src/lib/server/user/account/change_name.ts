import type { Cookies } from '@sveltejs/kit';
import { authenticate } from '../authenticate';
import { User_Model } from '../models';
import { verify_name } from '../verify/verify_name';

/**
 * Changes the name of a user account.
 *
 * @param cookies - The cookies object containing the user's authentication token.
 * @param name - The new name to be set for the user account.
 * @returns A promise that resolves to an object with either an error message or the updated name.
 */
export async function change_name(
	cookies: Cookies,
	name: string
): Promise<{ error: string } | { name: string }> {
	const auth = authenticate(cookies);

	if (!auth) {
		return { error: 'You are not authenticated' };
	}

	const { id } = auth;

	const name_error = verify_name(name);

	if (name_error) {
		return { error: name_error };
	}

	const user = await User_Model?.findOne({ _id: id });

	if (!user) {
		return { error: 'User could not found' };
	}

	if (user?.user?.name === name) {
		return { error: 'You already have this name.' };
	}

	if (user?.user) {
		if (name) {
			user.user.name = name;
		}
	}

	try {
		await user.save();
		return { name };
	} catch (err) {
		return { error: err as string };
	}
}
