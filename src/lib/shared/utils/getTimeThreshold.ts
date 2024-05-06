/**
 * Returns the time threshold in milliseconds based on the given period.
 * @param period - The period for which the time threshold is calculated. Possible values are 'daily', 'weekly', 'monthly', and 'yearly'.
 * @returns The time threshold in milliseconds.
 */
export function getTimeThreshold(period: string): number {
	switch (period) {
		case 'daily':
			return 24 * 60 * 60 * 1000; // 24 hours in milliseconds
		case 'weekly':
			return 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
		case 'monthly':
			return 28 * 24 * 60 * 60 * 1000; // 28 days in milliseconds
		case 'yearly':
			return 365 * 24 * 60 * 60 * 1000; // 365 days in milliseconds
		default:
			return 0;
	}
}
