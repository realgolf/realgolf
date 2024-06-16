<script lang="ts">
	import type { Team } from '$lib/scripts/Exact/types';
	import { _, isLoading } from 'svelte-i18n';

	let teams: Team[] = [
		{ pos: 1, name: '', color: 'red', data: [], points: 0, shots: 0 },
		{ pos: 2, name: '', color: 'blue', data: [], points: 0, shots: 0 },
		{ pos: 3, name: '', color: 'green', data: [], points: 0, shots: 0 },
		{ pos: 4, name: '', color: 'orange', data: [], points: 0, shots: 0 },
		{ pos: 5, name: '', color: 'pink', data: [], points: 0, shots: 0 },
		{ pos: 6, name: '', color: 'yellow', data: [], points: 0, shots: 0 }
	];

	function play() {
		if (localStorage) {
			// Filter out teams with empty names
			const validTeams = teams.filter((team) => team.name.trim() !== '');

			// Create an array of team data with only name and color properties
			const teamData = validTeams.map((team) => ({
				pos: team.pos,
				name: team.name,
				color: team.color.toLowerCase(),
				data: team.data ?? [],
				points: team.points,
				shots: team.shots
			}));

			// Store the filtered team data in localStorage
			localStorage.setItem(`exact_${validTeams.length}_teams`, JSON.stringify(teamData));

			// Navigate to the play page
			location.href = '/dashboard/games/Exact/play?team_length=' + validTeams.length;
		}
	}
</script>

<svelte:head>
	<title>{$_('exact')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('exact')}</h1>

	<p>Choose the size of the team and the color and name for each player.</p>

	<div class="choose">
		{#each teams as teamMember}
			<div class="team_member">
				<label for="name">Enter the name for the Player</label>
				<input type="text" name="name" id="name" bind:value={teamMember.name} />
				<label for="color">Enter the color for the Player:</label>
				<input
					type="text"
					name="color"
					id="color"
					bind:value={teamMember.color}
					style="color: {teamMember.color};"
				/>
			</div>
		{/each}
	</div>

	<button on:click={play}>{$_('play')}</button>
{/if}

<style>
	.choose {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.team_member {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	label {
		font-weight: bold;
	}
	input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		margin-top: 1rem;
	}
</style>
