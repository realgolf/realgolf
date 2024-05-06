/**
 * Verifies the validity of a handicap value.
 * @param handicap - The handicap value to be verified.
 * @returns A string indicating any errors or additional advice related to the handicap value.
 */
export function verify_handicap(handicap: number): string {
	const advice = " If you don't have a handicap, please enter 54.";

	if (!handicap) {
		return 'Handicap is required.' + advice;
	}

	if (isNaN(handicap)) {
		return 'Invalid handicap value. Please enter a valid number.' + advice;
	}

	if (handicap > 54) {
		return 'Handicap must be smaller or equal to 54.' + advice;
	}

	if (handicap < -54) {
		return 'Handicap is too low.' + advice;
	}

	return '';
}
