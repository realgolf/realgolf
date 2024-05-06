/**
 * Removes the last symbol from a string.
 *
 * @param string - The input string.
 * @returns The input string with the last symbol removed.
 */
export function removeLastSymbol(string: string) {
	return string.slice(0, -1);
}
