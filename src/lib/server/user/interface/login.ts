/**
 * Represents the response object for an error.
 */
export interface ErrorResponse {
	error: string;
}

/**
 * Represents the response object for a successful login.
 */
export interface SuccessResponse {
	username: string;
	id: string;
	email: string;
	name: string;
	verification_code: number;
}
