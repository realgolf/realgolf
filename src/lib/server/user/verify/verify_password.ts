/**
 * Verifies if the provided password meets the required criteria.
 *
 * @param password - The password to be verified.
 * @param verified_password - The password to be compared with the original password for verification.
 * @returns An error message if the password is invalid, otherwise an empty string.
 */
export function verify_password(password: string, verified_password: string): string {
	if (!password) {
		return 'Pasword is required.';
	}

	if (password !== verified_password) {
		return 'The passwords must be identical.';
	}

	if (password.length < 8) {
		return 'Password must be at least 8 characters.';
	}

	return '';
}
