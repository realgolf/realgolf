/**
 * Sanitizes HTML by removing potentially dangerous elements and attributes.
 *
 * @param node - The HTML node to sanitize.
 * @param unsafeHTML - The HTML string to sanitize.
 * @returns An object with an `update` method that can be used to update the sanitized HTML.
 */
import { default as DOMPurify, default as createDOMPurify } from 'dompurify';

export default function sanitizeHTML(node: { innerHTML: string }, [unsafeHTML]: [string]) {
	if (typeof window !== 'undefined') {
		const DOMPurify = createDOMPurify(window);

		node.innerHTML = DOMPurify.sanitize(unsafeHTML);
	}

	return {
		update([unsafeHTML]: [string]) {
			if (typeof window !== 'undefined') {
				node.innerHTML = DOMPurify.sanitize(unsafeHTML);
			}
		}
	};
}
