import { updatePointsDisplay } from "./UpdatePointsDisplay";
import { changeTeam } from "./changeTeam";

export function ifMatch(
  match: string[],
  targetId: string,
  color: string,
  teams: any[],
  pointsByTeam: {
    [x: string]: { update: (arg0: (currentPoints: number) => number) => void };
  },
  lastRowNumbers: any,
  clickedCellsCount: number,
  currentTeam: any,
  currentTeamIndex: any
) {
  const rowNumber = parseInt(match[1]);
  const index = parseInt(match[2]);
  let clickedCell: HTMLElement | null = document.getElementById(targetId);
  if (clickedCell) {
    clickedCell.style.backgroundColor = color;
    let team = teams.find((t: { color: any }) => t.color === color);
    if (team) {
      pointsByTeam[color].update((currentPoints: number) => {
        let newPoints = currentPoints;

        if (rowNumber >= 1 && rowNumber <= 6) {
          newPoints += 1;
        } else if (rowNumber === 7) {
          newPoints += 2;
        } else if (rowNumber === 8) {
          newPoints += 3;
        } else if (rowNumber === 9) {
          newPoints += 5;
        } else if (rowNumber === 10) {
          newPoints -= 1;
        }

        if (lastRowNumbers[color] === rowNumber) {
          if (rowNumber >= 1 && rowNumber <= 6) {
            newPoints += 1;
          } else if (rowNumber === 7) {
            newPoints += 2;
          } else if (rowNumber === 8) {
            newPoints += 3;
          } else if (rowNumber === 9) {
            newPoints += 5;
          } else if (rowNumber === 10) {
            newPoints -= 1;
          }
        }

        lastRowNumbers[color] = rowNumber; // Setze lastRowNumber nach der Verarbeitung

        const storedData = localStorage.getItem(`exact_${teams.length}_data`);
        let parsedData = storedData ? JSON.parse(storedData) : {};

        parsedData[color] = { points: newPoints, shots: clickedCellsCount };
        localStorage.setItem(
          `exact_${teams.length}_data`,
          JSON.stringify(parsedData)
        ); // Im localStorage speichern
        return newPoints;
      });

      updatePointsDisplay(teams);
      clickedCellsCount++;
    }
  }
}
