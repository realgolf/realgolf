import { updateTeamTurn } from "./updateTeamTurn";

interface Team {
  color: string;
  data: string[];
}

export function changeTeam(
  currentTeam: Team,
  currentTeamIndex: number,
  teams: Team[],
  color: string
) {
  currentTeamIndex = (currentTeamIndex + 1) % teams.length;
  currentTeam = teams[currentTeamIndex];
  color = currentTeam.color;
  updateTeamTurn(color);
}
