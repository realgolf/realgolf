<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import GoBack from "./GoBack.svelte";
  import { writable } from "svelte/store";
  import { updateTeamTurn } from "$lib/scripts/Exact/updateTeamTurn";
  import { updatePointsDisplay } from "$lib/scripts/Exact/UpdatePointsDisplay";
  import { findWinner } from "$lib/scripts/Exact/findWinner";
  import { resetGame } from "$lib/scripts/Exact/resetGame";
  import { ifMatch } from "$lib/scripts/Exact/ifMatch";

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

  export let teams: Team[];

  interface Team {
    color: string;
    data: number[];
    points: number;
  }

  let pointsByTeam: Record<string, any> = {};
  let shotsPlayed: number = 0;

  function changeTeam() {
    currentTeamIndex = (currentTeamIndex + 1) % teams.length;
    currentTeam = teams[currentTeamIndex];
    color = currentTeam.color;
    updateTeamTurn(color);
  }

  teams.forEach((team) => {
    pointsByTeam[team.color] = writable(team.points);
  });

  onMount(() => {
    const storedData = localStorage.getItem(`exact_${teams.length}_data`);
    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      teams.forEach((team) => {
        if (parsedData[team.color]) {
          pointsByTeam[team.color].set(parsedData[team.color].points);
        }
      });
      shotsPlayed = parsedData["red"].shots;
      clickedCellsCount = shotsPlayed; // Update clickedCellsCount as well
    }

    updatePointsDisplay(teams);
    updateTeamTurn(color);
  });

  let userInput: number = 20;
  let clickedCellsCount: number = 0; // Initialize clickedCellsCount
  let currentTeamIndex = 0;
  let currentTeam = teams[currentTeamIndex];
  let color = currentTeam.color;

  function handleClick(event: MouseEvent) {
    const targetId = (event.target as HTMLElement).id;
    const match = targetId.match(/row(\d+)-(\d+)/);

    if (match) {
      ifMatch(
        match,
        targetId,
        color,
        teams,
        pointsByTeam,
        lastRowNumbers,
        clickedCellsCount,
        currentTeam,
        currentTeamIndex
      );
      changeTeam();
    }

    if (clickedCellsCount === userInput * teams.length) {
      const winner = findWinner(teams);
      const confirmed = confirm(
        `The winner is ${winner}! Do you want to play again?`
      );

      if (confirmed) {
        resetGame(
          teams,
          pointsByTeam,
          userInput,
          clickedCellsCount,
          currentTeamIndex,
          currentTeam,
          color
        );
      }
    }
  }

  let lastRowNumbers: Record<string, number | null> = {};

  onMount(() => {
    updatePointsDisplay(teams);
    updateTeamTurn(color);
  });

  afterUpdate(() => {
    updateTeamTurn(color);
  });
</script>

<svelte:head>
  <title>Exact - {teams.length} Players</title>
</svelte:head>

<GoBack />

<h1>{teams.length} Players</h1>

<p>
  Enter the amount of shots per team: <input
    bind:value={userInput}
    type="number"
    name="shots"
    id="shots"
  />
</p>

<p>
  You have played {clickedCellsCount} of {userInput * teams.length} shots, so you
  have
  {userInput * teams.length - clickedCellsCount} shots left.
</p>

<p id="team_turn_display">Current Team Turn: {currentTeam.color}</p>
<button
  on:click={() =>
    resetGame(
      teams,
      pointsByTeam,
      userInput,
      clickedCellsCount,
      currentTeamIndex,
      currentTeam,
      color
    )}>Restart</button
>
<button on:click={changeTeam}> Switch Team </button>

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
