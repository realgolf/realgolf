<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';

	const teams: Array<{ pos: number; name: string; color: string; data: string[] }> = [
		{ pos: 1, name: '', color: 'red', data: [] },
		{ pos: 2, name: '', color: 'blue', data: [] },
		{ pos: 3, name: '', color: 'green', data: [] },
		{ pos: 4, name: '', color: 'orange', data: [] },
		{ pos: 5, name: '', color: 'pink', data: [] },
		{ pos: 6, name: '', color: 'yellow', data: [] }
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
				data: team.data ?? []
			}));

			// Store the filtered team data in localStorage
			localStorage.setItem(`4winning_${validTeams.length}_teams`, JSON.stringify(teamData));

			// Navigate to the play page
			location.href = '/dashboard/games/4Winning/play?team_length=' + validTeams.length;
		}
	}
</script>

<svelte:head>
	<title>{$_('4_winning')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('4_winning')}</h1>

	<p>{$_('choose_the_size_of_the_game')}</p>

	<div class="choose">
		{#each teams as teamMember}
			<div class="team_member">
				<label for="name">{$_('enter_name_for_player')}</label>
				<input type="text" name="name" id="name" bind:value={teamMember.name} />
				<label for="color">{$_('enter_color_for_player')}</label>
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
