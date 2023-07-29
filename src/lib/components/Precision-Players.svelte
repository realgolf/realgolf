<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  export let teams: Team[];
  export let point: number;

  interface Team {
    color: string;
    points: number;
    distance: number;
  }

  let team = teams[0];

  function generateRandomNumber(): number {
    const randomNumber: number = Math.random() * (100 - 10) + 10;
    const roundedNumber: number = Math.ceil(randomNumber);
    return roundedNumber;
  }

  let MetersToPlay: number = generateRandomNumber();

  function updatePointsDisplay() {
    const display = document.querySelector("#points_display");
    if (display) {
      display.innerHTML = teams
        .map((t) => `${t.color} team points: ${t.points}`)
        .join("<br>");
    }
  }

  function changeTeam() {
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
  });

  afterUpdate(() => {
    updatePointsDisplay();
  });
</script>

<svelte:head>
  <title>Precision - {teams.length} Players</title>
</svelte:head>

<h1>{teams.length} Players</h1>

<div id="points_display" />

<p>Meters to play:</p>
<ol>
  <li>{MetersToPlay}</li>
</ol>

<ol>
  {#each teams as t, index}
    {#if t === team}
      <p>Distance Played by {t.color}:</p>
      <input type="number" bind:value={t.distance} />
      <br />
      <button on:click={deductPoints}>Enter</button>
    {/if}
  {/each}
</ol>

<style lang="scss">
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
