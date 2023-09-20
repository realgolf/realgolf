import { restartGame } from "./restartGame";

interface Team {
  color: string;
  data: string[];
}

export function checkWin(
  winCombinations: any,
  currentTeam: Team,
  teams: Team[],
  hitCounts: Record<string, number>,
  currentTeamIndex: number,
  color: string
) {
  for (const combination of winCombinations) {
    const { cells } = combination;
    const teamData = currentTeam.data;
    let isWinningCombination = true;

    for (const cell of cells) {
      const { outerIndex, innerIndex } = cell;
      const cellId = `${outerIndex}-${innerIndex}`;

      if (!teamData.includes(cellId)) {
        isWinningCombination = false;
        break;
      }
    }

    if (isWinningCombination) {
      const confirmed = confirm(
        `Team ${currentTeam.color} wins! Do you want to restart the game?`
      );

      if (confirmed) {
        restartGame(teams, hitCounts, currentTeam, currentTeamIndex, color);
      }
    }
  }

  return false;
}
