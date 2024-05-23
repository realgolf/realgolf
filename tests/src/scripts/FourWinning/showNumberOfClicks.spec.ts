import { showNumberofClicks } from '../../../../src/lib/scripts/FourWinning/showNumberOfClicks';

describe('showNumberofClicks', () => {
	it('should return the number of clicks as a string', () => {
		const hitCounts = 10;
		const numberOfClicks = '0';

		const result = showNumberofClicks(hitCounts, numberOfClicks);

		expect(result).toBe('10');
	});

	it('should return the hit counts as a stringified JSON object', () => {
		const hitCounts = { button1: 5, button2: 3, button3: 7 };
		const numberOfClicks = '0';

		const result = showNumberofClicks(hitCounts, numberOfClicks);

		expect(result).toBe('{"button1":5,"button2":3,"button3":7}');
	});
});
