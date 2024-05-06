/**
 * Redirects the user to the specified path.
 * @param {string} path - The path to redirect to.
 */
export function redirect(path: string) {
	window.location.href = path;
}
