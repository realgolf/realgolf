import { showModal } from '../../../../src/lib/scripts/Archive/showModal';

describe('showModal', () => {
	let modal: HTMLElement;
	let textElement: HTMLElement;
	let yesBtn: HTMLElement;
	let saveBtn: HTMLElement;
	let noBtn: HTMLElement;

	beforeEach(() => {
		// Create the necessary DOM elements for testing
		modal = document.createElement('div');
		modal.id = 'confirmationModal';
		document.body.appendChild(modal);

		textElement = document.createElement('div');
		textElement.id = 'confirmationText';
		modal.appendChild(textElement);

		yesBtn = document.createElement('button');
		yesBtn.id = 'yesBtn';
		modal.appendChild(yesBtn);

		saveBtn = document.createElement('button');
		saveBtn.id = 'saveBtn';
		modal.appendChild(saveBtn);

		noBtn = document.createElement('button');
		noBtn.id = 'noBtn';
		modal.appendChild(noBtn);
	});

	afterEach(() => {
		// Clean up the DOM elements after each test
		modal.remove();
	});

	it('should display the modal and set the message', () => {
		const message = 'Are you sure?';
		showModal(
			message,
			() => {},
			() => {},
			() => {}
		);

		expect(modal.style.display).toBe('block');
		expect(textElement.innerHTML).toBe(message);
	});

	it('should hide the modal and call the yesCallback when yesBtn is clicked', () => {
		let yesCallbackCalled = false;
		showModal(
			'',
			() => {
				yesCallbackCalled = true;
			},
			() => {},
			() => {}
		);

		yesBtn.click();

		expect(modal.style.display).toBe('none');
		expect(yesCallbackCalled).toBe(true);
	});

	it('should hide the modal and call the saveCallback when saveBtn is clicked', () => {
		let saveCallbackCalled = false;
		showModal(
			'',
			() => {},
			() => {
				saveCallbackCalled = true;
			},
			() => {}
		);

		saveBtn.click();

		expect(modal.style.display).toBe('none');
		expect(saveCallbackCalled).toBe(true);
	});

	it('should hide the modal and call the noCallback when noBtn is clicked', () => {
		let noCallbackCalled = false;
		showModal(
			'',
			() => {},
			() => {},
			() => {
				noCallbackCalled = true;
			}
		);

		noBtn.click();

		expect(modal.style.display).toBe('none');
		expect(noCallbackCalled).toBe(true);
	});
});
