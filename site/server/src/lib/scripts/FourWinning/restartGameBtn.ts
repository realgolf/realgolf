import { updateTeamTurn } from "./updateTeamTurn";

interface Team {
  color: string;
  data: string[];
}

export function restartGame_Btn(
  teams: Team[],
  hitCounts: Record<string, number>,
  currentTeam: Team,
  currentTeamIndex: number,
  color: string
) {
  let input = document.getElementById("distance") as HTMLInputElement;

  if (input) {
    input.value = "";
  }

  localStorage.removeItem(`4winning_team_${teams.length}`);

  teams.forEach((team) => {
    team.data = [];
  });

  const cells = document.querySelectorAll(".meters");
  cells.forEach((cell) => {
    (cell as HTMLElement).style.backgroundColor = "";
  });

  hitCounts = {};

  currentTeamIndex = 0;
  currentTeam = teams[currentTeamIndex];
  color = currentTeam.color;
  updateTeamTurn(color);
}
