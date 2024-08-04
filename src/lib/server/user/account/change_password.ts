import type { Cookies } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { authenticate } from '../authenticate';
import { User_Model } from '../models';
import { verify_password } from '../verify/verify_password';

/**
 * Changes the password for a user account.
 *
 * @param cookies - The cookies object containing the user's authentication token.
 * @param current_password - The current password of the user.
 * @param new_password - The new password to set for the user.
 * @param verified_password - The verified new password to confirm the change.
 * @returns A promise that resolves to an object with either an error message or the new password.
 */
export async function change_password(
	cookies: Cookies,
	current_password: string,
	new_password: string,
	verified_password: string
): Promise<{ error: string } | { new_password: string }> {
	const auth = authenticate(cookies);

	if (!auth) {
		return { error: 'You are not authenticated' };
	}

	const { id } = auth;

	const user = await User_Model?.findOne({ id });

	const valid_current_password = (await bcrypt.compare(
		current_password,
		user?.user?.password ?? ''
	)) as unknown as boolean;

	if (!valid_current_password) {
		return { error: 'Invalid current password' };
	} else if (new_password == current_password) {
		return { error: 'New password cannot be the same as the old password' };
	} else if (new_password == verified_password) {
		const password_error = verify_password(new_password, verified_password);

		if (password_error) {
			return { error: password_error };
		}

		if (!user) {
			return { error: 'User could not be found' };
		}

		const saltRounds = 10;
		const hashed_password = await bcrypt.hash(new_password, saltRounds);

		if (user && user.user) {
			user.user.password = hashed_password;
		}
	} else {
		return { error: 'Passwords do not match' };
	}

	try {
		await user.save();
		return { new_password };
	} catch (err) {
		return { error: err as string };
	}
}
