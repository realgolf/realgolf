/**
 * Regular expression for validating email addresses.
 */
export const email_regexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

/**
 * Number of seconds in one week.
 */
export const one_week = 7 * 60 * 60 * 24;

/**
 * Options for the cookie used in the server.
 */
export const cookie_options = {
	httpOnly: true,
	secure: true,
	sameSite: 'strict',
	path: '/',
	maxAge: one_week
} as const;
