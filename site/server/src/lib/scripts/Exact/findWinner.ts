export function findWinner(teams: any): string {
  let maxPoints = -Infinity;
  let winner = "";

  for (const team of teams) {
    if (team.points > maxPoints) {
      maxPoints = team.points;
      winner = team.color;
    }
  }

  return winner;
}
