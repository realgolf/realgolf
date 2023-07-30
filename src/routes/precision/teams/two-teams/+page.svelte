<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  interface Team {
    color: string;
    points: number;
    distance: number;
    teamSize: number;
  }

  let point: number = 100;

  let teams = [
    { color: "red", points: point, distance: 0, teamSize: 1 },
    { color: "blue", points: point, distance: 0, teamSize: 1 },
  ];

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
  <title>{teams.length} Teams</title>
</svelte:head>

<h1>{teams.length} Teams</h1>

<div id="error_message" />

{#each teams as t}
  <p>{t.color} points {t.points}.</p>
{/each}

<p>Meters to play:</p>
<ol>
  <li>{MetersToPlay}</li>
</ol>

{#each teams as t}
  <p>{t.color} team points: {t.points}</p>
{/each}

{#each teams as t}
  <p>Enter the size of the {t.color} team:</p>
  <input bind:value={t.teamSize} type="number" name="" id="" />
{/each}

{#each teams as t, index}
  {#if t === team}
    <p>Distance Played by {t.color}:</p>
    <input type="number" bind:value={t.distance} />
    <br />
    <button on:click={deductPoints}>Enter</button>
  {/if}
{/each}

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

  #error_message {
    color: red;
  }
</style>
