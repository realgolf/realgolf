<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';

	export let teams: Team[];
	export let point: number;

	interface Team {
		color: string;
		points: number;
		distance: number;
	}

	let range: number = 150;

	let currentTeamIndex = 0;
	let color = teams[currentTeamIndex].color;
	let currentTeam = teams[currentTeamIndex];

	function generateRandomNumber(): number {
		const randomNumber: number = Math.random() * (range - 10) + 10;
		const roundedNumber: number = Math.ceil(randomNumber);
		return roundedNumber;
	}

	let MetersToPlay: number = generateRandomNumber();

	function updatePointsDisplay() {
		const display = document.querySelector('#points_display');
		if (display) {
			display.innerHTML = teams.map((t) => `${t.color} team points: ${t.points}`).join('<br>');
		}
	}

	function changeTeam() {
		MetersToPlay = generateRandomNumber();
		for (let team of teams) {
			team.distance = null as unknown as number;
		}
		currentTeamIndex = (currentTeamIndex + 1) % teams.length;
		currentTeam = teams[currentTeamIndex];
		color = currentTeam.color;
	}

	function deductPoints() {
		const difference: number = MetersToPlay - currentTeam.distance;
		const pointsToDeduct = Math.abs(difference);
		currentTeam.points -= pointsToDeduct;
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

		range = 150;
		currentTeamIndex = 0;
		color = teams[currentTeamIndex].color;
		currentTeam = teams[currentTeamIndex];
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

<button on:click={resetGame}>Reset Game</button>

<label for="range">Choose range:</label>
<input type="text" name="range" bind:value={range} />

<p>Meters to play:</p>
<ol>
	<li class="success">{MetersToPlay}</li>
</ol>

<ol>
	{#each teams as t, index}
		{#if t === currentTeam}
			<p>Distance Played by {t.color}:</p>
			<input
				placeholder="Please enter the distance you have played as a number"
				type="number"
				bind:value={t.distance}
			/>
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
