<script lang="ts">
  import { onMount } from "svelte";

  interface Team {
    color: string;
    points: number;
    distance: number;
  }

  let teams: Team[] = [
    { color: "red", points: 100, distance: 0 },
    { color: "blue", points: 100, distance: 0 },
  ];

  let team = teams[0];

  function generateRandomNumber(): number {
    const randomNumber: number = Math.random() * (100 - 10) + 10;
    const roundedNumber: number = Math.ceil(randomNumber);
    return roundedNumber;
  }

  const MetersToPlay: number = generateRandomNumber();

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
    team.points = team.points - difference;
    changeTeam();
  }

  onMount(() => {
    updatePointsDisplay();
  });
</script>

<svelte:head>
  <title>2 Players</title>
</svelte:head>

<h1>2 Players</h1>

<div id="points_display" />

<p>Meters to play:</p>
<ol>
  <li>{MetersToPlay}</li>
</ol>

<ol>
  {#each teams as t}
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
  }
</style>
