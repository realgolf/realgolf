/**
 * Toggles the display of table previews.
 *
 * @returns {HTMLCollectionOf<Element>} The collection of table previews.
 */
export function togglePreview(): HTMLCollectionOf<Element> {
	const tablePreviews = document.getElementsByClassName('table_previews');

	for (const tablePreview of tablePreviews) {
		if (tablePreview instanceof HTMLElement) {
			tablePreview.style.display = tablePreview.style.display === 'none' ? 'block' : 'none';
		}
	}

	return tablePreviews;
}
