import bcrypt from 'bcrypt';
import type { ErrorResponse, SuccessResponse } from '../interface/login';
import { User_Model } from '../models';
import { email_regexp } from '../utils';

/**
 * Retrieves a user based on their email and password.
 * @param email - The user's email.
 * @param password - The user's password.
 * @returns A promise that resolves to an ErrorResponse object if there is an error, or a SuccessResponse object if the user is found and the password is correct.
 */
export async function get_user(
	email: string,
	password: string
): Promise<ErrorResponse | SuccessResponse> {
	if (!email) {
		return { error: 'Email is required.' };
	}

	if (!RegExp(email_regexp).exec(email)) {
		return { error: 'Please enter a valid email.' };
	}

	const user = await User_Model?.findOne({ 'user.email': email });

	if (!user) {
		return { error: 'Email could not be found.' };
	}

	if (!password) {
		return { error: 'Password is required.' };
	}

	const password_is_correct = await bcrypt.compare(password, user?.user?.password ?? '');

	if (!password_is_correct) {
		return { error: 'Password is not correct.' };
	}

	const id = user._id.toString();
	const name = user?.user?.name ?? '';
	const username = user.user?.username ?? '';

	return { id, email, name, username };
}
