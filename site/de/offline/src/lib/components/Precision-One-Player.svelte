<script lang="ts">
	import { afterUpdate, onMount } from "svelte";
	import GoBack from "./GoBack.svelte";
  
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
		  .map((t) => `${t.color} Team Punkte: ${t.points}`)
		  .join("<br>");
	  }
	}
  
	function updateNumberofClicks() {
	  const display = document.querySelector("#number_clicks");
	  if (display) {
		display.innerHTML = teams
		  .map((t) => `Anzahl an gespielten Schlägen: ${t.shots} schläge`)
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
		alert(`Sie haben ${currentTeam.shots} gespielt`);
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
	<title>Precision - {teams.length} Spieler</title>
  </svelte:head>
  
  <GoBack />
  
  <h1>{teams.length} Spieler</h1>
  
  <div id="points_display" />
  
  {#each teams as team}
	<p id="number_clicks">Anzahl an gespielten Schlägen: {team.shots}</p>
  {/each}
  
  <button on:click={resetGame}>Reset Game</button>
  
  <p>Choose range:</p>
  <input type="text" name="range" bind:value={range} />
  
  <p>Zu spielende Meter:</p>
  <ol>
	<li class="success">{MetersToPlay}</li>
  </ol>
  
  <ol>
	{#each teams as t, index}
	  {#if t === currentTeam}
		<p>Von {t.color} gespielte Distanze:</p>
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
  