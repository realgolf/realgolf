/**
 * Get the current date and time
 */
export const today = new Date();

/**
 * Get the current time
 * Hours, minutes, and seconds
 */
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

/**
 * Format the time
 */
export const formattedTime =
	hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

/**
 * Get the full Years
 */
const year = today.getFullYear();

/**
 * Gett the full Month
 */
const month = (today.getMonth() + 1).toString().padStart(2, '0');

/**
 * Get the full Day
 */
const day = today.getDate().toString().padStart(2, '0');

/**
 * Format the date
 */
export const formattedDate = `${year}-${month}-${day}`;
