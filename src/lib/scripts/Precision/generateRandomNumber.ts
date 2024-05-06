/**
 * Generates a random number within a specified range.
 *
 * @param range - The range of possible values.
 * @param lower_range - The lower bound of the range.
 * @param upper_range - The upper bound of the range.
 * @returns The generated random number.
 */
export function generateRandomNumber(
	range: number,
	lower_range: number,
	upper_range: number
): number {
	let randomNumber: number;

	do {
		randomNumber = Math.random() * range + lower_range;
	} while (randomNumber >= upper_range);

	const roundedNumber: number = Math.ceil(randomNumber);
	return roundedNumber;
}
