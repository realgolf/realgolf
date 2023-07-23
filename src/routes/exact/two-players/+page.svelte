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

  let colors: string[] = ["red", "blue"];
  let color = colors[0];

  let teams: Team[] = [
    { color: "red", data: [], points: 0 },
    { color: "blue", data: [], points: 0 },
  ];

  let currentTeam = teams[0];

  function changeTeam() {
    color = color === colors[0] ? colors[1] : colors[0];
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
        }
        changeTeam();
      }
    }
  }

  function updateTeamTurn() {
    const teamTurnDisplay = document.getElementById("team_turn_display");
    if (teamTurnDisplay) {
      teamTurnDisplay.innerHTML = `Current Team Turn: ${color}`;
    }
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
  <title>Exact - 2 Players</title>
</svelte:head>

<h1>2 Players</h1>

<p id="team_turn_display">Current Team Turn: {currentTeam.color}</p>

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
  .meters,
  .points {
    flex: 0 0 25%;
    box-sizing: border-box;
    border: 5px solid var(--border-color);
    min-width: calc(90vw / 15);
    height: calc(50vh / 8);
    text-align: center;
  }

  .meters:hover {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: 5px solid var(--border-color);
  }
</style>
