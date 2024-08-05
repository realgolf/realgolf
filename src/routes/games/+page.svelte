<script lang="ts">
	import { applyFilters } from '$lib/scripts/Archive/applyFilters';
	import type { Data } from '$lib/scripts/Archive/types';
	import { afterUpdate, onMount } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';
	import Game from './Game.svelte';

	/**
	 * REACTIVE DATA
	 */
	export let data: Data;

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
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('games')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('games')}</h1>

	<label for="search">{$_('search_for_games')}:</label>
	<input type="search" id="search" bind:value={searchTerm} />
	<p class="error">
		{$_('search_games_description')}
	</p>

	{#if filteredGames.length > 0}
		{#each filteredGames as { name, teams, data, id, date, is_over, owner }}
			<Game {name} {teams} {data} {id} {date} {is_over} {owner} />
		{/each}
	{:else}
		<p class="error">{$_('no_games_found')}</p>
	{/if}
{/if}

<style lang="scss">
	@import '$lib/scss/Archive/main.scss';
</style>
