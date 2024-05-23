import { getPagePath } from '../../../../src/lib/scripts/Nav/get_page_path';

describe('getPagePath', () => {
	it('should return "<strong>Home</strong>" when currentPagePath is "/"', () => {
		// Arrange
		const currentPagePath = '/';

		// Act
		const result = getPagePath(currentPagePath);

		// Assert
		expect(result).toBe('<strong>Home</strong>');
	});

	it('should return the breadcrumb path for non-root paths', () => {
		// Arrange
		const currentPagePath = '/about/team';

		// Act
		const result = getPagePath(currentPagePath);

		// Assert
		expect(result).toBe(
			' <a href="/about" style="text-decoration: none;">About</a> <span style="color: darkgrey;">/</span> <a href="/about/team" style="text-decoration: none;"><strong>Team</strong></a>'
		);
	});

	it('should truncate the breadcrumb path to a maximum of 2 segments', () => {
		// Arrange
		const currentPagePath = '/about/team/members';

		// Act
		const result = getPagePath(currentPagePath);

		// Assert
		expect(result).toBe(
			' <a href="/about" style="text-decoration: none;">About</a> <span style="color: darkgrey;">/</span> <a href="/about/team" style="text-decoration: none;"><strong>Team</strong></a>'
		);
	});
});
