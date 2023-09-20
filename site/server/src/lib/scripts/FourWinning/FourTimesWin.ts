import { restartGame } from "./restartGame";

interface Team {
  color: string;
  data: string[];
}

export function FourTimesWin(
  cellId: string,
  teamColor: string,
  teams: Team[],
  hitCounts: Record<string, number>,
  currentTeam: Team,
  currentTeamIndex: number,
  color: string
) {
  const confirmed = confirm(
    `Cell ${cellId} has been hit four times by ${teamColor} team!`
  );

  if (confirmed) {
    const confirmed2 = confirm(`Do you want to restart the game?`);

    if (confirmed2) {
      restartGame(teams, hitCounts, currentTeam, currentTeamIndex, color);
    }
  }
}
