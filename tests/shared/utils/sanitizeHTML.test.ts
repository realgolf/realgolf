import sanitizeHTML from '../../../src/lib/shared/utils/sanitizeHTML';

describe('sanitizeHTML', () => {
	it('should sanitize HTML', () => {
		// Define the input values
		const node = { innerHTML: '' };
		const unsafeHTML = '<script>alert("Hello, World!")</script>';

		// Call the function
		const result = sanitizeHTML(node, [unsafeHTML]);

		// Check the output
		expect(node.innerHTML).toEqual('');
		expect(result).toEqual({
			update: expect.any(Function)
		});
	});

	it('should update sanitized HTML', () => {
		// Define the input values
		const node = { innerHTML: '' };
		const unsafeHTML = '<script>alert("Hello, World!")</script>';

		// Call the function
		const result = sanitizeHTML(node, [unsafeHTML]);

		// Update the HTML
		result.update(['<p>Hello, World!</p>']);

		// Check the output
		expect(node.innerHTML).toEqual('<p>Hello, World!</p>');
	});
});
