import { changeTeam } from "$lib/components/Exact.svelte";
import { checkWin } from "./checkWin";
import { winCombinations } from "./generateWinCombinations";

interface Team {
  color: string;
  data: string[];
}

export function handleClick(
  currentTeam: Team,
  currentTeamIndex: number,
  teams: Team[],
  color: string,
  hitCounts: Record<string, number>
) {
  let input = document.getElementById("distance") as HTMLInputElement;

  if (input) {
    let distanceStr = input.value.trim();

    if (distanceStr !== "") {
      let distance = parseFloat(distanceStr);

      if (!isNaN(distance)) {
        if (distance >= 10 && distance <= 23) {
          let rowIndex = Math.floor((distance - 10) / 2);
          let cell = document.getElementById(`row1-${rowIndex}`);
          let Id = `1-${rowIndex}`;

          if (cell) {
            cell.style.backgroundColor = currentTeam.color;
            currentTeam.data.push(Id);
            localStorage.setItem(
              `4winning_team_${teams.length}`,
              JSON.stringify(teams)
            );

            checkWin(
              winCombinations,
              currentTeam,
              teams,
              hitCounts,
              currentTeamIndex,
              color
            );
            changeTeam();
          }
        } else if (distance >= 24 && distance <= 37) {
          let rowIndex = Math.floor((distance - 24) / 2);
          let cell = document.getElementById(`row2-${rowIndex}`);
          let Id = `2-${rowIndex}`;

          if (cell) {
            cell.style.backgroundColor = currentTeam.color;
            currentTeam.data.push(Id);
            localStorage.setItem(
              `4winning_team_${teams.length}`,
              JSON.stringify(teams)
            );

            checkWin(
              winCombinations,
              currentTeam,
              teams,
              hitCounts,
              currentTeamIndex,
              color
            );
            changeTeam();
          }
        } else if (distance >= 38 && distance <= 58) {
          let rowIndex = Math.floor((distance - 38) / 3);
          let cell = document.getElementById(`row3-${rowIndex}`);
          let Id = `3-${rowIndex}`;

          if (cell) {
            cell.style.backgroundColor = currentTeam.color;
            currentTeam.data.push(Id);
            localStorage.setItem(
              `4winning_team_${teams.length}`,
              JSON.stringify(teams)
            );

            checkWin(
              winCombinations,
              currentTeam,
              teams,
              hitCounts,
              currentTeamIndex,
              color
            );
            changeTeam();
          }
        } else if (distance >= 59 && distance <= 79) {
          let rowIndex = Math.floor((distance - 59) / 3);
          let cell = document.getElementById(`row4-${rowIndex}`);
          let Id = `4-${rowIndex}`;

          if (cell) {
            cell.style.backgroundColor = currentTeam.color;
            currentTeam.data.push(Id);
            localStorage.setItem(
              `4winning_team_${teams.length}`,
              JSON.stringify(teams)
            );

            checkWin(
              winCombinations,
              currentTeam,
              teams,
              hitCounts,
              currentTeamIndex,
              color
            );
            changeTeam();
          }
        } else if (distance >= 80 && distance <= 100) {
          let rowIndex = Math.floor((distance - 80) / 3);
          let cell = document.getElementById(`row5-${rowIndex}`);
          let Id = `5-${rowIndex}`;

          if (cell) {
            cell.style.backgroundColor = currentTeam.color;
            currentTeam.data.push(Id);
            localStorage.setItem(
              `4winning_team_${teams.length}`,
              JSON.stringify(teams)
            );

            checkWin(
              winCombinations,
              currentTeam,
              teams,
              hitCounts,
              currentTeamIndex,
              color
            );
            changeTeam();
          }
        } else if (distance >= 101 && distance <= 121) {
          let rowIndex = Math.floor((distance - 101) / 3);
          let cell = document.getElementById(`row6-${rowIndex}`);
          let Id = `6-${rowIndex}`;

          if (cell) {
            cell.style.backgroundColor = currentTeam.color;
            currentTeam.data.push(Id);
            localStorage.setItem(
              `4winning_team_${teams.length}`,
              JSON.stringify(teams)
            );

            checkWin(
              winCombinations,
              currentTeam,
              teams,
              hitCounts,
              currentTeamIndex,
              color
            );
            changeTeam();
          }
        } else if (distance >= 122 && distance <= 142) {
          let rowIndex = Math.floor((distance - 122) / 3);
          let cell = document.getElementById(`row7-${rowIndex}`);
          let Id = `7-${rowIndex}`;

          if (cell) {
            cell.style.backgroundColor = currentTeam.color;
            currentTeam.data.push(Id);
            localStorage.setItem(
              `4winning_team_${teams.length}`,
              JSON.stringify(teams)
            );

            checkWin(
              winCombinations,
              currentTeam,
              teams,
              hitCounts,
              currentTeamIndex,
              color
            );
            changeTeam();
          }
        } else if (distance >= 143 && distance <= 163) {
          let rowIndex = Math.floor((distance - 142) / 3);
          let cell = document.getElementById(`row8-${rowIndex}`);
          let Id = `8-${rowIndex}`;

          if (cell) {
            cell.style.backgroundColor = currentTeam.color;
            currentTeam.data.push(Id);
            localStorage.setItem(
              `4winning_team_${teams.length}`,
              JSON.stringify(teams)
            );

            checkWin(
              winCombinations,
              currentTeam,
              teams,
              hitCounts,
              currentTeamIndex,
              color
            );
            changeTeam();
          }
        } else {
          alert("An unexpected error occured.");
        }
      } else {
        alert("Invalid input. Please enter a valid number.");
      }
    } else {
      alert("You need to enter a number.");
    }
  }
}
