<script lang="ts">
	import { enhance } from '$app/forms';
	import Game from '$lib/components/Archive/Game.svelte';
	import { applyFilters } from '$lib/scripts/Archive/applyFilters';
	import type { Data } from '$lib/scripts/Archive/types';
	import { afterUpdate, onMount } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';
	import { teams } from './teams';

	/**
	 * REACTIVE DATA
	 */
	export let data: Data;
	export let form;

	/**
	 * STATE
	 */
	let selectedTeam = '';
	let searchTerm = '';

	// eslint-disable-next-line
	let filteredGames: games[] | any[] = [];

	// ON COMPONENT MOUNT
	onMount(() => {
		filteredGames = data.games.reverse();
		console.log(filteredGames);
	});

	/**
	 * APPLY FILTERS ON EVERY UPDATE
	 */
	afterUpdate(() => {
		filteredGames = applyFilters(searchTerm, filteredGames, data, selectedTeam);
		filteredGames = filteredGames.reverse();
	});

	/**
	 * HANDLE TEAM CHANGE
	 */
	function handleTeamChange() {
		filteredGames = applyFilters(searchTerm, filteredGames, data, selectedTeam);
		filteredGames = filteredGames.reverse();
	}

	let showMessage = true;

	let games_length = data.games.length;

	/**
	 * AUTOMATICALLY HIDE THE MESSAGE AFTER 20 SECONDS
	 */
	setTimeout(() => {
		showMessage = false;
	}, 20000);
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('archive')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('archive')}</h1>

	<h2>{$_('total_users_games', { values: { games_length } })}</h2>

	<form action="?/delete_all" method="POST" autocomplete="off">
		<button>{$_('delete_all')}</button>
	</form>

	{#if showMessage == true && form?.message}
		<p class="success">{form?.message}</p>
	{/if}

	{#if showMessage == true && form?.error}
		<p class="error">{form?.error}</p>
	{/if}

	<label for="search">{$_('search_for_games')}:</label>
	<input type="search" id="search" bind:value={searchTerm} />
	<p class="error">
		{$_('search_games_description')}
	</p>

	<label for="teamSelect">{$_('select_team')}:</label>
	<select id="teamSelect" bind:value={selectedTeam} on:change={handleTeamChange}>
		<option value="">{$_('all_teams')}</option>
		{#each teams as team}
			<option value={team.teams}>{team.name}</option>
		{/each}
	</select>

	{#if filteredGames.length > 0}
		{#each filteredGames as { name, teams, data, id, date, is_over }}
			<Game {name} {teams} {data} {id} {date} {is_over} />
		{/each}
	{:else}
		<p class="error">{$_('no_games_found')}</p>
	{/if}

	<form
		use:enhance
		action="?/saveLocalStorageGameInDB"
		method="POST"
		id="saveLocalStorageToDB"
		style="display: none;"
	>
		<input type="text" name="team" id="team_LStoDB" />
		<input type="text" name="name" id="name_LStoDB" />
		<input type="text" name="localStorageData" id="localStorageData_LStoDB" />
	</form>
{/if}

<style lang="scss">
	@import '$lib/scss/Archive/main.scss';
</style>
