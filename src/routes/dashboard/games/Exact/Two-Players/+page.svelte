<script lang="ts">
	import { enhance } from '$app/forms';
	import Exact from '$lib/components/Games/Exact.svelte';
	import { _, isLoading } from 'svelte-i18n';

	interface Team {
		color: string;
		data: number[];
		points: number;
	}

	let teams: Team[] = [
		{ color: 'red', data: [], points: 0 },
		{ color: 'blue', data: [], points: 0 }
	];

	function saveToDatabaseAndSubmitForm(event: { preventDefault: () => void }) {
		event.preventDefault();
		// Extract data from localStorage
		const localStorageData = localStorage.getItem('exact_2_teams');

		if (localStorageData) {
			teams = JSON.parse(localStorageData);

			// Daten in das Eingabefeld setzen
			const team_data = document.getElementById('team_data') as HTMLInputElement;
			if (team_data) {
				team_data.value = JSON.stringify(teams);
			}

			localStorage.removeItem('exact_2_teams');

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
