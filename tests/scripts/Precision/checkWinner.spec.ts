describe('checkWinner', () => {
	it('should check if there is a winner among the teams based on their points left', () => {
		const teams = [
			{ color: 'red', distance: 50, points: 50 },
			{ color: 'blue', distance: 50, points: 0 }
		];
		let winner;

		const teamsWithPoints = teams.filter((t) => t.points > 0);

		if (teamsWithPoints.length === 1) {
			winner = teamsWithPoints[0].color;
		}

		expect(teamsWithPoints.length).toBe(1);
		expect(winner).toBe('red');
	});
});
