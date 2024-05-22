import { togglePreview } from '../../../src/lib/scripts/Archive/togglePreview';

describe('togglePreview', () => {
	beforeEach(() => {
		document.body.innerHTML = `
      <div class="table_previews" style="display: none;"></div>
      <div class="table_previews" style="display: none;"></div>
      <div class="table_previews" style="display: none;"></div>
    `;
	});

	afterEach(() => {
		document.body.innerHTML = '';
	});

	it('should toggle the display style of all table_previews elements', () => {
		togglePreview();

		const tablePreviews = document.getElementsByClassName('table_previews');

		for (const tablePreview of tablePreviews) {
			if (tablePreview instanceof HTMLElement) {
				expect(tablePreview.style.display).toBe('block');
			}
		}
	});

	it('should return the HTMLCollection of table_previews elements', () => {
		const result = togglePreview();

		expect(result).toBeInstanceOf(HTMLCollection);
		expect(result.length).toBe(3);
	});
});
