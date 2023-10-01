<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  interface Team {
    color: string;
    points: number;
    distance: number;
    shots: number;
  }

  let point = 100;

  let teams: Team[] = [
    {
      color: "red",
      points: point,
      distance: 0,
      shots: 0,
    },
  ];

  let range: number = 150;

  let currentTeamIndex = 0;
  let currentTeam = teams[currentTeamIndex];

  function generateRandomNumber(): number {
    const randomNumber: number = Math.random() * (range - 10) + 10;
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

  function updateNumberofClicks() {
    const display = document.querySelector("#number_clicks");
    if (display) {
      display.innerHTML = teams
        .map((t) => `Number of shots played ${t.shots} shots`)
        .join("<br>");
    }
  }

  function deductPoints() {
    const difference: number = MetersToPlay - currentTeam.distance;
    const pointsToDeduct = Math.abs(difference);
    currentTeam.points -= pointsToDeduct;
    calculateShots();
    MetersToPlay = generateRandomNumber();
    if (currentTeam.points <= 0) {
      alert(`You have played ${currentTeam.shots}`);
      resetGame();
    }
  }

  function calculateShots() {
    teams.forEach((team) => {
      team.shots = team.shots += 1;
      teams = teams;
    });
  }

  function resetGame() {
    for (let team of teams) {
      team.points = point;
      team.shots = 0;
    }

    range = 150;
    MetersToPlay = generateRandomNumber();
  }

  onMount(() => {
    updatePointsDisplay();
    updateNumberofClicks();
  });

  afterUpdate(() => {
    updatePointsDisplay();
    updateNumberofClicks();
  });
</script>

<svelte:head>
  <title>Precision - {teams.length} Player</title>
</svelte:head>

<h1>{teams.length} Player</h1>

<div id="points_display" />

{#each teams as team}
  <p id="number_clicks">Number of shots played: {team.shots}</p>
{/each}

<button on:click={resetGame}>Reset Game</button>

<p>Choose range:</p>
<input type="text" name="range" bind:value={range} />

<p>Meters to play:</p>
<ol>
  <li class="success">{MetersToPlay}</li>
</ol>

<ol>
  {#each teams as t, index}
    {#if t === currentTeam}
      <p>Distance Played by {t.color}:</p>
      <input type="number" bind:value={t.distance} />
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
    margin: 15px 0;
  }

  button {
    margin: 15px 0;
  }
</style>
