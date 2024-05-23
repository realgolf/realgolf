import { generateRandomNumber } from '../../../../src/lib/scripts/Precision/generateRandomNumber';

describe('generateRandomNumber', () => {
	it('should generate a random number within the specified range', () => {
		const range = 10;
		const lowerRange = 5;
		const upperRange = 15;

		const randomNumber = generateRandomNumber(range, lowerRange, upperRange);

		expect(randomNumber).toBeGreaterThanOrEqual(lowerRange);
		expect(randomNumber).toBeLessThanOrEqual(upperRange);
	});

	it('should return a rounded number', () => {
		const range = 10;
		const lowerRange = 5;
		const upperRange = 15;

		const randomNumber = generateRandomNumber(range, lowerRange, upperRange);

		expect(randomNumber).toBe(Math.ceil(randomNumber));
	});
});
