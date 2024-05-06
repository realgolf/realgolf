import { SECRET_JWT_KEY } from '$env/static/private';
import type { Cookies } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

/**
 * Authenticates the user based on the provided cookies.
 * @param cookies - The cookies object containing the authentication token.
 * @returns The authenticated user object if the token is valid, otherwise undefined.
 */
export function authenticate(cookies: Cookies): auth | undefined {
	const token = cookies.get('auth-token');
	if (!token) return undefined;
	try {
		const auth = jwt.verify(token, SECRET_JWT_KEY);
		if (!auth) throw '';
		return auth as auth;
	} catch {
		return undefined;
	}
}
