import { SECRET_JWT_KEY } from '$env/static/private';
import jwt from 'jsonwebtoken';
import { get_user } from './login/get_user';
import { User_Model } from './models';

/**
 * Logs in a user with the provided email and password.
 * @param email - The email of the user.
 * @param password - The password of the user.
 * @returns An object containing the JWT token and the user information if the login is successful, or an error object if there is an error.
 */
export async function login_user(email: string, password: string) {
	const user = await get_user(email, password);

	if ('error' in user) {
		return { error: user.error };
	}

	await User_Model?.updateOne(
		{ 'user.email': email },
		{ $set: { 'user.last_login_date': new Date() } }
	);

	const token = jwt.sign({ id: user.id }, SECRET_JWT_KEY);

	return { token, user };
}
