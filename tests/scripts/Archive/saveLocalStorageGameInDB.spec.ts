import { saveLocalStorageGameInDB } from '../../../src/lib/scripts/Archive/saveLocalStorageGameInDB';

describe('saveLocalStorageGameInDB', () => {
	it('should populate the input fields with the correct values', () => {
		// Mock the required elements
		const nameInput = document.createElement('input');
		nameInput.id = 'name_LStoDB';
		const teamInput = document.createElement('input');
		teamInput.id = 'team_LStoDB';
		const localStorageDataInput = document.createElement('input');
		localStorageDataInput.id = 'localStorageData_LStoDB';

		// Mock the localStorage getItem method
		const localStorageMock = jest.spyOn(localStorage, 'getItem');
		localStorageMock.mockReturnValue('{"key": "value"}');

		// Mock the form submit method
		const formMock = jest.spyOn(HTMLFormElement.prototype, 'submit');
		formMock.mockImplementation(() => {});

		// Call the function
		saveLocalStorageGameInDB('team1');

		// Assert the values of the input fields
		expect(nameInput.value).toBe('team1');
		expect(teamInput.value).toBe('team1');
		expect(localStorageDataInput.value).toBe('{"key": "value"}');

		// Assert that the form submit method was called
		expect(formMock).toHaveBeenCalled();

		// Clean up the mocks
		localStorageMock.mockRestore();
		formMock.mockRestore();
	});
});
