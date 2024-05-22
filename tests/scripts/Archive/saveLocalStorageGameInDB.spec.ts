import { saveLocalStorageGameInDB } from '../../../src/lib/scripts/Archive/saveLocalStorageGameInDB';

describe('saveLocalStorageGameInDB', () => {
	let nameInput: HTMLInputElement,
		teamInput: HTMLInputElement,
		localStorageDataInput: HTMLInputElement,
		saveLocalStorageToDB: HTMLFormElement;

	beforeEach(() => {
		// Mock the required elements
		nameInput = document.createElement('input');
		nameInput.id = 'name_LStoDB';
		document.body.appendChild(nameInput);

		teamInput = document.createElement('input');
		teamInput.id = 'team_LStoDB';
		document.body.appendChild(teamInput);

		localStorageDataInput = document.createElement('input');
		localStorageDataInput.id = 'localStorageData_LStoDB';
		document.body.appendChild(localStorageDataInput);

		saveLocalStorageToDB = document.createElement('form');
		saveLocalStorageToDB.id = 'saveLocalStorageToDB';
		document.body.appendChild(saveLocalStorageToDB);

		// Mock the localStorage getItem method
		jest.spyOn(localStorage, 'getItem');

		// Mock the form submit method
		jest.spyOn(HTMLFormElement.prototype, 'submit').mockImplementationOnce(() => {});
	});

	afterEach(() => {
		// Clean up the DOM
		document.body.removeChild(nameInput);
		document.body.removeChild(teamInput);
		document.body.removeChild(localStorageDataInput);
		document.body.removeChild(saveLocalStorageToDB);

		// Restore the mocks
		jest.restoreAllMocks();
	});

	it('should populate the input fields with the correct values', () => {
		// Call the function
		saveLocalStorageGameInDB('4winning_2_teams');

		// Assert the values of the input fields
		expect(nameInput.value).toBe('4 Winning 2 Players');
		expect(teamInput.value).toBe('4winning_2_teams');

		// Assert that the form submit method was called
		expect(HTMLFormElement.prototype.submit).toHaveBeenCalled();
	});
});
