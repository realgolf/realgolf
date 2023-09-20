import { FourTimesWin } from "./FourTimesWin";

interface Team {
  color: string;
  data: string[];
}

export function FieldClickedFourTimes(
  outerIndex: number,
  innerIndex: number,
  currentTeam: Team,
  hitCounts: Record<string, number>,
  teams: Team[],
  currentTeamIndex: number,
  color: string
) {
  const cellId = `row${outerIndex + 1}-${innerIndex}`;
  const cell = document.getElementById(cellId);
  if (cell) {
    const teamColor = currentTeam.color;
    const cellKey = `${teamColor}_${cellId}`;

    if (!hitCounts[cellKey]) {
      hitCounts[cellKey] = 1;
    } else {
      hitCounts[cellKey] += 1;
    }

    if (hitCounts[cellKey] === 4) {
      FourTimesWin(
        cellId,
        teamColor,
        teams,
        hitCounts,
        currentTeam,
        currentTeamIndex,
        color
      );
    }
  }
}
