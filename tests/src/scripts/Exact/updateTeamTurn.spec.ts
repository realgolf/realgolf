import { updateTeamTurn } from '../../../../src/lib/scripts/Exact/updateTeamTurn';

describe('updateTeamTurn', () => {
	let teamTurnDisplay: HTMLParagraphElement;

	beforeEach(() => {
		// Set up the DOM element
		teamTurnDisplay = document.createElement('p');
		teamTurnDisplay.id = 'team_turn_display';
		document.body.appendChild(teamTurnDisplay);
	});

	afterEach(() => {
		// Clean up the DOM
		document.body.innerHTML = '';
	});

	it('should update the team turn display with the provided color', () => {
		// Arrange
		const color = 'red';
		const expectedInnerHTML = `Current Team Turn: ${color}`;

		// Act
		const result = updateTeamTurn(color);

		// Assert
		expect(result).toBe(expectedInnerHTML);
		expect(teamTurnDisplay.innerHTML).toBe(expectedInnerHTML);
	});

	it('should return the innerHTML of the team turn display', () => {
		// Arrange
		const color = 'blue';
		const expectedInnerHTML = `Current Team Turn: ${color}`;

		// Act
		const result = updateTeamTurn(color);

		// Assert
		expect(result).toBe(expectedInnerHTML);
		expect(teamTurnDisplay.innerHTML).toBe(expectedInnerHTML);
	});
});
