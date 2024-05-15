export function formatNumber(number: number): string {
	const numString = number.toString();

	if (numString.length <= 3) {
		return numString;
	}

	if (numString.length <= 6) {
		const firstPart = numString.substring(0, numString.length - 3);
		const secondPart = numString.substring(numString.length - 3);
		return firstPart + '.' + secondPart + 'k';
	}

	if (numString.length <= 9) {
		const firstPart = numString.substring(0, numString.length - 6);
		const secondPart = numString.substring(numString.length - 6, numString.length - 3);
		return firstPart + '.' + secondPart + 'm';
	}

	if (numString.length <= 12) {
		const firstPart = numString.substring(0, numString.length - 9);
		const secondPart = numString.substring(numString.length - 9, numString.length - 6);
		return firstPart + '.' + secondPart + 'b';
	}

	return numString;
}
