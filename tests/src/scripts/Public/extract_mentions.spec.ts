import { extractMentions } from '../../../../src/lib/scripts/Public/extract_mentions';

describe('extractMentions', () => {
	it('should extract mentions from a string', () => {
		const input = 'Hello @JohnDoe! How are you, @JaneDoe?';
		const expectedOutput = ['JohnDoe', 'JaneDoe'];

		const result = extractMentions(input);

		expect(result).toEqual(expectedOutput);
	});

	it('should return an empty array if there are no mentions', () => {
		const input = 'Hello World!';
		const expectedOutput: string[] = [];

		const result = extractMentions(input);

		expect(result).toEqual(expectedOutput);
	});

	it('should handle null input', () => {
		const input = null;
		const expectedOutput: string[] | undefined[] = [];

		const result = extractMentions(input);

		expect(result).toEqual(expectedOutput);
	});

	it('should handle undefined input', () => {
		const input = undefined;
		const expectedOutput: string[] | undefined[] = [];

		const result = extractMentions(input);

		expect(result).toEqual(expectedOutput);
	});
});
