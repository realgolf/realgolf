import { updatePointsDisplay } from "./UpdatePointsDisplay";
import { updateTeamTurn } from "./updateTeamTurn";

interface Team {
  color: string;
  data: number[];
  points: number;
}

export function resetGame(
  teams: Team[],
  pointsByTeam: { [x: string]: { set: (arg0: number) => void } },
  userInput: number,
  clickedCellsCount: number,
  currentTeamIndex: number,
  currentTeam: { color: any },
  color: any
) {
  localStorage.removeItem(`exact_${teams.length}_data`);
  for (let team of teams) {
    team.data = [];
    team.points = 0;
    pointsByTeam[team.color].set(0); // Setzen Sie die Punkte für jedes Team auf 0 im Store
  }

  userInput = 20;
  clickedCellsCount = 0;
  currentTeamIndex = 0;
  currentTeam = teams[currentTeamIndex];
  color = currentTeam.color;

  const cells = document.querySelectorAll(".meters");
  cells.forEach((cell) => {
    (cell as HTMLElement).style.backgroundColor = "";
  });

  updatePointsDisplay(teams);
  updateTeamTurn(color);
}
