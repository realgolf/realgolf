<script lang="ts">
	import { enhance } from '$app/forms';
	import FourWinning from '$lib/components/Games/FourWinning.svelte';
	import Dialog, { open_dialog } from '$lib/components/Global/Dialog.svelte';
	import { onMount } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';

	// eslint-disable-next-line
	export let data: any;

	let teams: Array<{ pos: number; name: string; color: string; data: string[] }> = [
		{ pos: 1, name: 'Red', color: 'red', data: [] },
		{ pos: 2, name: 'Blue', color: 'blue', data: [] },
		{ pos: 3, name: 'Green', color: 'green', data: [] },
		{ pos: 4, name: 'Orange', color: 'orange', data: [] },
		{ pos: 5, name: 'Pink', color: 'pink', data: [] },
		{ pos: 6, name: 'Yellow', color: 'yellow', data: [] }
	];

	let measurement_unit = data.measurement_unit;
	let team_length: number = teams.length;
	let team = `4winning_${team_length}_teams`;

	// Function to load the teams array from localStorage
	function loadTeams() {
		if (window) {
			const params = new URLSearchParams(window.location.search);
			const teamLengthParam = params.get('team_length');
			team_length = parseInt(teamLengthParam as string) ?? teams.length;
		}

		const storedTeams = localStorage.getItem(`4winning_${team_length}_teams`);
		if (storedTeams) {
			teams = JSON.parse(storedTeams) ?? teams;
		}

		teams = teams.filter((team) => team !== null && team !== undefined);
		localStorage.setItem(`4winning_${team_length}_teams`, JSON.stringify(teams));
		team_length = teams.length;
		team = `4winning_${team_length}_teams`;
	}

	// Call the function to load the teams when the component is initialized
	onMount(() => {
		loadTeams();
	});

	function saveToDatabaseAndSubmitForm(event: { preventDefault: () => void }) {
		event.preventDefault();
		let localStorageData = localStorage.getItem(`4winning_${team_length}_teams`);

		if (localStorageData) {
			const parsedData = JSON.parse(localStorageData);

			if (Array.isArray(parsedData)) {
				const redTeam = parsedData.find((team) => team.color === 'red');
				const blueTeam = parsedData.find((team) => team.color === 'blue');
				const greenTeam = parsedData.find((team) => team.color === 'green');
				const orangeTeam = parsedData.find((team) => team.color === 'orange');
				const pinkTeam = parsedData.find((team) => team.color === 'pink');
				const yellowTeam = parsedData.find((team) => team.color === 'yellow');

				if (redTeam) {
					const existingRedTeam = teams.find((t) => t.color === 'red');
					if (existingRedTeam) {
						existingRedTeam.data = redTeam.data;
					}
				}

				if (blueTeam) {
					const existingBlueTeam = teams.find((t) => t.color === 'blue');
					if (existingBlueTeam) {
						existingBlueTeam.data = blueTeam.data;
					}
				}

				if (greenTeam) {
					const existingGreenTeam = teams.find((t) => t.color === 'green');
					if (existingGreenTeam) {
						existingGreenTeam.data = greenTeam.data;
					}
				}

				if (orangeTeam) {
					const existingOrangeTeam = teams.find((t) => t.color === 'orange');
					if (existingOrangeTeam) {
						existingOrangeTeam.data = orangeTeam.data;
					}
				}

				if (pinkTeam) {
					const existingPinkTeam = teams.find((t) => t.color === 'pink');
					if (existingPinkTeam) {
						existingPinkTeam.data = pinkTeam.data;
					}
				}

				if (yellowTeam) {
					const existingYellowTeam = teams.find((t) => t.color === 'yellow');
					if (existingYellowTeam) {
						existingYellowTeam.data = yellowTeam.data;
					}
				}

				let new_teams = [redTeam, blueTeam, greenTeam, orangeTeam, pinkTeam, yellowTeam];

				// Hier aktualisiere den Wert von teams, wenn du das möchtest
				teams = new_teams;
				teams = teams.filter((team) => team !== null && team !== undefined);

				// Daten in das Eingabefeld setzen
				const team_data = document.getElementById('team_data') as HTMLInputElement;
				if (team_data) {
					team_data.value = JSON.stringify(teams);
				}

				localStorage.removeItem(`4winning_${team_length}_teams`);

				// Das Formular absenden
				const form = document.querySelector('form') as HTMLFormElement;
				form.submit();
			}
		} else {
			let error = 'There is no game data!';
			open_dialog({
				text: error,
				modal: false,
				cancel: null
			});
		}
	}
</script>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<FourWinning bind:teams bind:team bind:measurement_unit bind:team_length />

	<div class="database">
		<br />
		<form method="POST" autocomplete="off" use:enhance>
			<input type="text" name="team_data" id="team_data" value={JSON.stringify(teams)} />
		</form>
	</div>
	<button on:click={saveToDatabaseAndSubmitForm}>{$_('save')}</button>

	<Dialog />
{/if}

<style lang="scss">
	.database {
		display: none;
	}
</style>
