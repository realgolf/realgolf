import { updateTeamTurn } from "./updateTeamTurn";

interface Team {
  color: string;
  data: string[];
}

export function changeTeam(
  currentTeam: Team,
  currentTeamIndex: number,
  teams: Team[]
) {
  currentTeamIndex = (currentTeamIndex + 1) % teams.length;
  currentTeam = teams[currentTeamIndex];
  updateTeamTurn(currentTeam.color); // Update the color using the new currentTeam
  return currentTeam; // Return the updated currentTeam
}
