<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  interface Team {
    color: string;
    points: number;
    distance: number;
    teamSize: number;
  }

  let point: number = 100;

  let teams: Team[] = [
    { color: "red", points: point, distance: 0, teamSize: 1 },
    { color: "blue", points: point, distance: 0, teamSize: 1 },
  ];
  let team = teams[0];

  function generateRandomNumber(): number {
    const randomNumber: number = Math.random() * (150 - 10) + 10;
    const roundedNumber: number = Math.ceil(randomNumber);
    return roundedNumber;
  }

  let MetersToPlay: number = generateRandomNumber();

  function CheckTeamSize() {
    const error_display: HTMLElement | null =
      document.getElementById("error_display");

    if (teams[0].teamSize === 0 || teams[1].teamSize === 0) {
      if (error_display) {
        error_display.innerHTML =
          "Both Teams must cosisted of one players at minimum!";
      }
    } else {
      if (error_display) {
        error_display.innerHTML = "";
      }
    }
  }

  function updatePointsDisplay() {
    const display = document.querySelector("#points_display");
    if (display) {
      display.innerHTML = teams
        .map((t) => `${t.color} team points: ${t.points}`)
        .join("<br>");
    }
  }

  function UpdatePoints() {
    if (teams[0].teamSize > teams[1].teamSize) {
      teams[0].points = teams[0].points * teams[0].teamSize;
      teams[1].points = teams[1].points * teams[0].teamSize;
      updatePointsDisplay();
    } else if (teams[1].teamSize > teams[0].teamSize) {
      teams[0].points = teams[0].points * teams[1].teamSize;
      teams[1].points = teams[1].points * teams[1].teamSize;
      updatePointsDisplay();
    }
  }

  function changeTeam() {
    MetersToPlay = generateRandomNumber();
    team = team === teams[0] ? teams[1] : teams[0];
  }
  function deductPoints() {
    const difference: number = MetersToPlay - team.distance;
    const pointsToDeduct = Math.abs(difference);
    team.points -= pointsToDeduct;
    changeTeam();
    checkWinner();
  }

  function checkWinner() {
    const teamsWithPoints = teams.filter((t) => t.points > 0);
    if (teamsWithPoints.length === 1) {
      const winner = teamsWithPoints[0].color;
      const confirmed = confirm(`The winner is Team ${winner}!`);

      if (confirmed) {
        resetGame();
      }
    }
  }

  function resetGame() {
    for (let team of teams) {
      team.points = point;
    }

    team = teams[0];
    MetersToPlay = generateRandomNumber();
  }

  onMount(() => {
    updatePointsDisplay();
    CheckTeamSize();
  });

  afterUpdate(() => {
    updatePointsDisplay();
    CheckTeamSize();
  });
</script>

<svelte:head>
  <title>Precision - {teams.length} Players</title>
</svelte:head>

<h1>{teams.length} Players</h1>

<div id="error_display" />

<div id="points_display" />

<p>Meters to play:</p>
<ol>
  <li>{MetersToPlay}</li>
</ol>

<ol>
  {#each teams as t}
    <li>
      <input bind:value={t.teamSize} type="number" />
    </li>
  {/each}
  <li>
    <button on:click={UpdatePoints}>Update Team size</button>
  </li>
</ol>

<ol>
  {#each teams as t, index}
    {#if t === team}
      <li>
        <p>Distance Played by {t.color}:</p>
        <input type="number" bind:value={t.distance} />
        <br />
        <button on:click={deductPoints}>Enter</button>
      </li>
    {/if}
  {/each}
</ol>

<style lang="scss">
  #error_display {
    color: red;
  }

  ol {
    list-style: none;
  }

  input {
    border: none;
    background-color: var(--border-color);
    color: var(--font-color);
    font-size: var(--medium-font);
  }
</style>
