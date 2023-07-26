<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  let rows = [
    {
      points: "1 Point",
      data: [5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 21],
    },
    {
      points: "1 Point",
      data: [23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 35, 36, 37, 38],
    },
    {
      points: "1 Point",
      data: [39, 41, 42, 43, 45, 46, 47, 48, 49, 51, 52, 53, 54, 56],
    },
    {
      points: "1 Point",
      data: [57, 58, 59, 61, 62, 63, 64, 65, 67, 68, 69, 71, 72, 73],
    },
    {
      points: "1 Point",
      data: [74, 75, 76, 78, 79, 81, 82, 83, 84, 85, 86, 87, 89, 91],
    },
    { points: "1 Point", data: [92, 93, 94, 95, 96, 97, 98] },
    { points: "2 Point", data: [11, 22, 33, 44, 55, 66, 77, 88, 99] },
    { points: "3 Points", data: [10, 20, 30, 40, 50, 60, 70, 80, 90] },
    { points: "5 Points", data: [100] },
    { points: "-1 Point", data: ["<5", ">100"] },
  ];

  interface Team {
    color: string;
    data: number[];
    points: number;
  }

  let colors: string[] = ["red", "blue", "green", "orange"];
  let color = colors[0];

  let teams: Team[] = [
    { color: "red", data: [], points: 0 },
    { color: "blue", data: [], points: 0 },
    { color: "green", data: [], points: 0 },
    {color: "orange", data: [], points: 0},
  ];

  let userInput: number = 20;
  let clickedCellsCount = 0; // Variable, um die Anzahl der angeklickten Zellen zu zählen

  let currentTeamIndex = 0;
  let currentTeam = teams[currentTeamIndex];

  function changeTeam() {
    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    currentTeam = teams[currentTeamIndex];
    color = currentTeam.color;

    updateTeamTurn();
  }

  function updatePointsDisplay() {
    const display = document.querySelector("#points_display");
    if (display) {
      display.innerHTML = teams
        .map((t) => `${t.color} team points: ${t.points}`)
        .join("<br>");
    }
  }

  // Funktion zum Ermitteln des Gewinners mit den meisten Punkten
  function findWinner(): string {
    let maxPoints = -Infinity;
    let winner = "";

    for (const team of teams) {
      if (team.points > maxPoints) {
        maxPoints = team.points;
        winner = team.color;
      }
    }

    return winner;
  }

  function handleClick(event: MouseEvent) {
    const targetId = (event.target as HTMLElement).id;
    const match = targetId.match(/row(\d+)-(\d+)/);

    if (match) {
      const rowNumber = parseInt(match[1]);
      const index = parseInt(match[2]);
      let clickedCell: HTMLElement | null = document.getElementById(targetId);
      if (clickedCell) {
        // Mark the cell as clicked and update the team's data
        clickedCell.style.backgroundColor = color;
        let team = teams.find((t) => t.color === color);
        if (team) {
          team.data.push(index);

          if (rowNumber >= 1 && rowNumber <= 6) {
            team.points += 1;
          } else if (rowNumber === 7) {
            team.points += 2;
          } else if (rowNumber === 8) {
            team.points += 3;
          } else if (rowNumber === 9) {
            team.points += 5;
          } else if (rowNumber === 10) {
            team.points -= 1;
          }

          updatePointsDisplay();
          clickedCellsCount++;
        }
        changeTeam();
      }
    }

    if (clickedCellsCount === userInput * 4) {
      const winner = findWinner();
      const confirmed = confirm(
        `The winner is ${winner}! Do you want to play again?`
      );

      if (confirmed) {
        resetGame();
      }
    }
  }

  function updateTeamTurn() {
    const teamTurnDisplay = document.getElementById("team_turn_display");
    if (teamTurnDisplay) {
      teamTurnDisplay.innerHTML = `Current Team Turn: ${color}`;
    }
  }

  function resetGame() {
    for (let team of teams) {
      team.data = [];
      team.points = 0;
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

    updatePointsDisplay();
    updateTeamTurn();
  }

  onMount(() => {
    updatePointsDisplay();
    updateTeamTurn();
  });

  afterUpdate(() => {
    updateTeamTurn();
  });
</script>

<svelte:head>
  <title>Exact - 4 Players</title>
</svelte:head>

<h1>4 Players</h1>

<p>
  Enter the amount of shots per team: <input
    bind:value={userInput}
    type="number"
    name="shots"
    id="shots"
  />
</p>

<p>
  You have played {clickedCellsCount} of {userInput * 4} shots, so you have
  {userInput * 4 - clickedCellsCount} shots left.
</p>

<p id="team_turn_display">Current Team Turn: {currentTeam.color}</p>
<button on:click={resetGame}>Restart</button>
<button on:click={changeTeam}>Switch Team</button>

<div id="points_display" />

<br />

<table id="field" style="display: flex; flex-direction: column;">
  {#each rows as { points, data }, outerIndex}
    <tbody id={`row${outerIndex + 1}`}>
      <tr>
        <td class="points">{points}</td>
        {#each data as value, innerIndex}
          <td
            class="meters"
            id={`row${outerIndex + 1}-${innerIndex}`}
            style="background-color: {teams[outerIndex]};"
            on:click={handleClick}
          >
            {value}
          </td>
        {/each}
      </tr>
    </tbody>
  {/each}
</table>

<style>
  table {
    margin-left: auto;
    margin-right: auto;
  }
  .meters,
  .points {
    flex: 0 0 25%;
    box-sizing: border-box;
    border: 5px solid var(--border-color);
    min-width: calc(80vw / 15);
    height: calc(30vh / 8);
    text-align: center;
  }

  .meters:hover {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: 5px solid var(--border-color);
  }

  input {
    color: var(--font-color);
    background-color: var(--bg-color);
    border: 2px solid var(--border-color);
    box-shadow: none;
    font-size: var(--medium-font);
  }
</style>
