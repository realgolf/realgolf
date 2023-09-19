import { updateTeamTurn } from "./updateTeamTurn";

export function changeTeam(
  currentTeam: { color: any },
  currentTeamIndex: number,
  color: any,
  teams: string | any[]
) {
  currentTeamIndex = (currentTeamIndex + 1) % teams.length;
  currentTeam = teams[currentTeamIndex];
  color = currentTeam.color;
  updateTeamTurn(color);
}
