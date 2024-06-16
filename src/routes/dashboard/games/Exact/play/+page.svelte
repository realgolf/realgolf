<script lang="ts">
	import { enhance } from '$app/forms';
	import Exact from '$lib/components/Games/Exact.svelte';
	import type { Team } from '$lib/scripts/Exact/types';
	import { onMount } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';

	let teams: Team[] = [
		{ pos: 1, name: '', color: 'red', data: [], points: 0, shots: 0 },
		{ pos: 2, name: '', color: 'blue', data: [], points: 0, shots: 0 },
		{ pos: 3, name: '', color: 'green', data: [], points: 0, shots: 0 },
		{ pos: 4, name: '', color: 'orange', data: [], points: 0, shots: 0 },
		{ pos: 5, name: '', color: 'pink', data: [], points: 0, shots: 0 },
		{ pos: 6, name: '', color: 'yellow', data: [], points: 0, shots: 0 }
	];

	let team_length: number = teams.length;
	let team = `exact_${team_length}_teams`;

	function loadTeams() {
		if (window) {
			const params = new URLSearchParams(window.location.search);
			const teamLengthParam = params.get('team_length');
			team_length = parseInt(teamLengthParam as string) ?? teams.length;
		}

		const storedTeams = localStorage.getItem(`exact_${team_length}_teams`);
		if (storedTeams) {
			teams = JSON.parse(storedTeams) ?? teams;
		}

		teams = teams.filter((team) => team !== null && team !== undefined);
		localStorage.setItem(`exact_${team_length}_teams`, JSON.stringify(teams));
		team_length = teams.length;
		team = `exact_${team_length}_teams`;
	}

	// Call the function to load the teams when the component is initialized
	onMount(() => {
		loadTeams();
	});

	function saveToDatabaseAndSubmitForm(event: { preventDefault: () => void }) {
		event.preventDefault();
		// Extract data from localStorage
		const localStorageData = localStorage.getItem(`exact_${team_length}_teams`);

		if (localStorageData) {
			teams = JSON.parse(localStorageData);

			// Daten in das Eingabefeld setzen
			const team_data = document.getElementById('team_data') as HTMLInputElement;
			if (team_data) {
				team_data.value = JSON.stringify(teams);
			}

			localStorage.removeItem(`exact_${team_length}_teams`);

			// Das Formular absenden
			const form = document.querySelector('form') as HTMLFormElement;
			form.submit();
		}
	}
</script>

{#if $isLoading}
	<p>Loading....</p>
{:else}
	<Exact {teams} />

	<div class="database">
		<br />
		<form method="POST" autocomplete="off" use:enhance>
			<input type="text" name="team_data" id="team_data" value={JSON.stringify(teams)} />
		</form>
	</div>
	<button on:click={saveToDatabaseAndSubmitForm}>{$_('save')}</button>
{/if}

<style lang="scss">
	.database {
		display: none;
	}
</style>
