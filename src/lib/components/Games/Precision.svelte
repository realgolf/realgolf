<script lang="ts">
	// Import all the functions and types from the Precision folder
	import { deductPoints } from '$lib/scripts/Precision/deductPoints';
	import { generateRandomNumber } from '$lib/scripts/Precision/generateRandomNumber';
	import { resetGame } from '$lib/scripts/Precision/resetGame';
	import type { Team } from '$lib/scripts/Precision/types';
	import { updatePointsDisplay } from '$lib/scripts/Precision/updatePointsDisplay';
	import { capitalizeFirstLetter } from '$lib/shared/utils/capitalizeFirstLetter';
	import { _ } from 'svelte-i18n';
// Import onMount and afterUpdate from Svelte
	import { afterUpdate, onMount } from 'svelte';
	// Import the Dialog component and the open_dialog function from the Global folder
	import Dialog, { open_dialog } from '../Global/Dialog.svelte';

	// Define Props
	export let teams: Team[];
	export let point: number;
	export let measurement_unit: string;
	// Define Variables
	let capitalizedMeasurementUnit = capitalizeFirstLetter(measurement_unit);

	let currentTeamIndex = 0;
	// eslint-disable-next-line
	let color = teams[currentTeamIndex].color;
	let currentTeam = teams[currentTeamIndex];

	let lower_range: number = 10;
	let upper_range: number = 200;

	let range = upper_range - lower_range;

	let combinedRange: string = `${lower_range}-${upper_range}`;

	let MetersToPlay: number = generateRandomNumber(range, lower_range, upper_range);

	// Define handleRangeInput function to handle the chnage of the allowed range
	function handleRangeInput(event: Event & { currentTarget: HTMLInputElement }): void {
		const inputRange = (event.target as HTMLInputElement).value;

		// Split the input into lower and upper values
		const [lowerStr, upperStr] = inputRange.split('-');

		// Convert the string values to numbers
		const lower = lowerStr ? parseInt(lowerStr, 10) : NaN;
		const upper = upperStr ? parseInt(upperStr, 10) : NaN;

		// Update the individual values if they are valid numbers
		if (!isNaN(lower)) {
			lower_range = lower;
		}

		if (!isNaN(upper)) {
			upper_range = upper;
		}
	}

	// Define changeTeam function to change the current team
	function changeTeam() {
		MetersToPlay = generateRandomNumber(range, lower_range, upper_range);
		for (let team of teams) {
			team.distance = null as unknown as number;
		}
		currentTeamIndex = (currentTeamIndex + 1) % teams.length;
		currentTeam = teams[currentTeamIndex];
		color = currentTeam.color;
	}

	// Define request_restart_confirmation function to request a confirmation before restarting the game
	function request_restart_confirmation() {
		open_dialog({
			text: 'Are you sure you want to restart the game?',
			modal: true,
			confirm: {
				text: "Yes, I'm sure",
				action: () => {
					resetGame(
						teams,
						point,
						range,
						lower_range,
						upper_range,
						currentTeamIndex,
						color,
						currentTeam,
						MetersToPlay
					);
				}
			},
			cancel: {
				text: 'No, I want to continue playing',
				action: () => {}
			}
		});
	}

	onMount(() => {
		updatePointsDisplay(teams);
	});

	afterUpdate(() => {
		updatePointsDisplay(teams);
	});
</script>

<svelte:head>
	<title>{$_('precision_players', { values: { teams_length: teams.length } })}</title>
</svelte:head>

<h1>{$_('precision_players', { values: { teams_length: teams.length } })}</h1>

<div id="points_display" />

<button on:click={request_restart_confirmation}>{$_('reset_game')}</button>

<p>{$_("choose_range")}</p>
<input
	type="text"
	name="combined_range"
	bind:value={combinedRange}
	on:input={handleRangeInput}
	placeholder="Input the Range you want to play split by an '-''."
/>
<button
	on:click={() => {
		MetersToPlay = generateRandomNumber(range, lower_range, upper_range);
	}}>{$_('generate_new_random_number')}</button
>

<p>
	{$_('distance_to_play', { values: { capitalizedMeasurementUnit: capitalizedMeasurementUnit } })}
</p>
<ol>
	<li class="success">{MetersToPlay}</li>
</ol>

<ol>
	{#each teams as t}
		{#if t === currentTeam}
			<p>{$_('distance_played_by', { values: { color: t.color } })}</p>
			<input
				placeholder="Please enter the distance you have played as a number"
				type="number"
				bind:value={t.distance}
			/>
			<button
				on:click={() =>
					deductPoints(
						MetersToPlay,
						currentTeam,
						changeTeam,
						teams,
						point,
						range,
						lower_range,
						upper_range,
						currentTeamIndex,
						color
					)}>{$_("enter")}</button
			>
		{/if}
	{/each}
</ol>

<Dialog />

<style lang="scss">
	@import '$lib/scss/Precision.scss';
</style>
