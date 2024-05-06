import type { winCombination } from './types';

/**
 * Generates an array of win combinations for a game board.
 * Each win combination is represented by an array of cells,
 * where each cell is defined by its outerIndex and innerIndex.
 *
 * @returns An array of win combinations.
 */
function generateWinCombinations(): {
	cells: { outerIndex: number; innerIndex: number }[];
}[] {
	const combinations: {
		cells: { outerIndex: number; innerIndex: number }[];
	}[] = [];

	// Rows
	for (let i = 0; i <= 55; i += 7) {
		for (let j = i; j < i + 4; j++) {
			combinations.push({
				cells: [
					{ outerIndex: Math.floor(j / 7), innerIndex: j % 7 },
					{ outerIndex: Math.floor((j + 1) / 7), innerIndex: (j + 1) % 7 },
					{ outerIndex: Math.floor((j + 2) / 7), innerIndex: (j + 2) % 7 },
					{ outerIndex: Math.floor((j + 3) / 7), innerIndex: (j + 3) % 7 }
				]
			});
		}
	}

	// Columns
	for (let i = 0; i < 7; i++) {
		for (let j = i; j <= i + 21; j += 7) {
			combinations.push({
				cells: [
					{ outerIndex: Math.floor(j / 7), innerIndex: j % 7 },
					{ outerIndex: Math.floor((j + 7) / 7), innerIndex: (j + 7) % 7 },
					{ outerIndex: Math.floor((j + 14) / 7), innerIndex: (j + 14) % 7 },
					{ outerIndex: Math.floor((j + 21) / 7), innerIndex: (j + 21) % 7 }
				]
			});
		}
	}

	// Diagonal (top-left to bottom-right)
	for (let i = 0; i <= 21; i += 7) {
		for (let j = i; j <= i + 2; j++) {
			combinations.push({
				cells: [
					{ outerIndex: Math.floor(j / 7), innerIndex: j % 7 },
					{ outerIndex: Math.floor((j + 8) / 7), innerIndex: (j + 8) % 7 },
					{ outerIndex: Math.floor((j + 16) / 7), innerIndex: (j + 16) % 7 },
					{ outerIndex: Math.floor((j + 24) / 7), innerIndex: (j + 24) % 7 }
				]
			});
		}
	}

	// Diagonal (top-right to bottom-left)
	for (let i = 3; i <= 23; i += 7) {
		for (let j = i; j <= i + 2; j++) {
			combinations.push({
				cells: [
					{ outerIndex: Math.floor(j / 7), innerIndex: j % 7 },
					{ outerIndex: Math.floor((j + 6) / 7), innerIndex: (j + 6) % 7 },
					{ outerIndex: Math.floor((j + 12) / 7), innerIndex: (j + 12) % 7 },
					{ outerIndex: Math.floor((j + 18) / 7), innerIndex: (j + 18) % 7 }
				]
			});
		}
	}

	return combinations;
}

/**
 * This function check if a team has won
 */

export const winCombinations: winCombination[] = generateWinCombinations();
