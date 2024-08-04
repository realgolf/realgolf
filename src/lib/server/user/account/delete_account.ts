import type { Cookies } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { authenticate } from '../authenticate';
import { User_Model } from '../models';
import { verify_password } from '../verify/verify_password';

/**
 * Deletes a user account.
 *
 * @param cookies - The cookies object containing the user's authentication token.
 * @param password - The password provided by the user to verify the account deletion.
 * @returns An object with either an error message or a success message indicating whether the account was deleted.
 */
export async function delete_account(cookies: Cookies, password: string) {
	const auth = authenticate(cookies);
	const verified_password = password;

	if (!auth) {
		return { error: 'You are not authenticated' };
	}

	const { id } = auth;

	const user = await User_Model?.findOne({ _id: id });

	if (!user) {
		return { error: 'User could not be found' };
	}

	const password_error = verify_password(password, verified_password);

	if (password_error) {
		return { error: password_error };
	}

	const password_is_correct = await bcrypt.compare(password, user.user?.password as string);

	if (password_is_correct) {
		try {
			user.deleted = true;
			await user.save();
			return { message: 'The user got deleted', account_deleted: true };
		} catch (err) {
			return { error: err as string, account_deleted: false };
		}
	} else {
		return { error: 'The passwords did not match', account_deleted: false };
	}
}
