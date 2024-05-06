/**
 * Capitalizes the first letter of a string.
 *
 * @param string - The string to capitalize.
 * @returns The capitalized string or "undefined" if the input is not a valid string or is undefined.
 */
export function capitalizeFirstLetter(string: string | undefined) {
	// Check if the string is defined and not empty
	if (typeof string === 'string' && string.length > 0) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	} else {
		// If the string is not a valid string or is undefined, replace it with "undefined"
		return 'undefined';
	}
}
