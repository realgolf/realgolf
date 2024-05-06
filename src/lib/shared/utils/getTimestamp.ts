/**
 * Get the current timestamp in the format HH:MM:SS
 * @returns {string} The current timestamp
 */
export function get_timestamp() {
	const date = new Date();

	// Get hours, minutes, and seconds from the date object
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	// Concatenate formatted time components with colons
	return `${hours}:${minutes}:${seconds}`;
}
