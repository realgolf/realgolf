/**
 * Displays a modal with a message and three buttons: Yes, Save, and No.
 * @param message - The message to be displayed in the modal.
 * @param yesCallback - The callback function to be executed when the Yes button is clicked.
 * @param saveCallback - The callback function to be executed when the Save button is clicked.
 * @param noCallback - The callback function to be executed when the No button is clicked.
 */
export function showModal(
	message: string,
	yesCallback: () => void,
	saveCallback: () => void,
	noCallback: () => void
) {
	const modal = document.getElementById('confirmationModal');
	const textElement = document.getElementById('confirmationText');
	const yesBtn = document.getElementById('yesBtn');
	const saveBtn = document.getElementById('saveBtn');
	const noBtn = document.getElementById('noBtn');

	if (modal && textElement && yesBtn && saveBtn && noBtn) {
		textElement.innerHTML = message;

		modal.style.display = 'block';

		yesBtn.onclick = () => {
			modal.style.display = 'none';
			yesCallback();
		};

		saveBtn.onclick = () => {
			modal.style.display = 'none';
			saveCallback();
		};

		noBtn.onclick = () => {
			modal.style.display = 'none';
			noCallback();
		};
	}
}
