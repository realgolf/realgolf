import type { Row } from './types';

/**
 * Represents an array of rows, each containing points and data.
 * @type {Row[]}
 */
export const rows: Row[] = [
	{
		points: '1 Point',
		data: [5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 21]
	},
	{
		points: '1 Point',
		data: [23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 35, 36, 37, 38]
	},
	{
		points: '1 Point',
		data: [39, 41, 42, 43, 45, 46, 47, 48, 49, 51, 52, 53, 54, 56]
	},
	{
		points: '1 Point',
		data: [57, 58, 59, 61, 62, 63, 64, 65, 67, 68, 69, 71, 72, 73]
	},
	{
		points: '1 Point',
		data: [74, 75, 76, 78, 79, 81, 82, 83, 84, 85, 86, 87, 89, 91]
	},
	{ points: '1 Point', data: [92, 93, 94, 95, 96, 97, 98] },
	{ points: '2 Point', data: [11, 22, 33, 44, 55, 66, 77, 88, 99] },
	{ points: '3 Points', data: [10, 20, 30, 40, 50, 60, 70, 80, 90] },
	{ points: '5 Points', data: [100] },
	{ points: '-1 Point', data: ['<5', '>100'] }
];
