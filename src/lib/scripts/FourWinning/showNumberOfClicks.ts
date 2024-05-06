/**
 * Converts the hitCounts object to a JSON string and assigns it to the numberOfClicks variable.
 *
 * @param hitCounts - The hitCounts object containing the number of clicks.
 * @param numberOfClicks - The variable to store the JSON string representation of hitCounts.
 * @returns The JSON string representation of hitCounts.
 */
export function showNumberofClicks(
	hitCounts: number | Record<string, number>,
	numberOfClicks: string
) {
	numberOfClicks = JSON.stringify(hitCounts);
	return numberOfClicks;
}
