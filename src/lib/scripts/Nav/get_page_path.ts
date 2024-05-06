import { capitalizeFirstLetter } from '$lib/shared/utils/capitalizeFirstLetter';

/**
 * Get the breadcrumb path for the current page
 * @param currentPagePath The current page path
 * @returns The breadcrumb path
 */
export function getPagePath(currentPagePath: string) {
	const path = currentPagePath;

	if (path === '/') {
		return '<strong>Home</strong>';
	}

	const pathParts = path.split('/').filter((part) => part !== '');
	let breadcrumbPath = '';

	for (let i = 0; i < Math.min(2, pathParts.length); i++) {
		const pathBefore = pathParts.slice(0, i + 1).join('/');
		const isLastSegment = i === Math.min(2, pathParts.length) - 1;

		breadcrumbPath += ` <a href="/${pathBefore}" style="text-decoration: none;">${
			isLastSegment ? '<strong>' : ''
		}${capitalizeFirstLetter(pathParts[i])}${isLastSegment ? '</strong>' : ''}</a>`;

		if (!isLastSegment) {
			breadcrumbPath += ` <span style="color: darkgrey;">/</span>`;
		}
	}

	return breadcrumbPath;
}
