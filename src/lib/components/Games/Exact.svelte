<script lang="ts">
	import { findWinner } from '$lib/scripts/Exact/findWinner';
	import { resetGame } from '$lib/scripts/Exact/resetGame';
	import { rows } from '$lib/scripts/Exact/rows';
	import type { Team } from '$lib/scripts/Exact/types';
	import { updatePoints } from '$lib/scripts/Exact/updatePoints';
	import { updatePointsDisplay } from '$lib/scripts/Exact/updatePointsDisplay';
	import { updateTeamTurn } from '$lib/scripts/Exact/updateTeamTurn';
	import { afterUpdate, onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { writable, type Writable } from 'svelte/store';
	import Dialog, { open_dialog } from '../Global/Dialog.svelte';

	export let teams: Team[];

	let pointsByTeam: Record<string, Writable<number>> = {};
	let shotsPlayed: number = 0;

	teams.forEach((team) => {
		pointsByTeam[team.color] = writable(team.points);
	});

	let userInput: number = 20;
	let clickedCellsCount: number = 0; // Initialize clickedCellsCount
	let currentTeamIndex = 0;
	let currentTeam = teams[currentTeamIndex];
	let color = currentTeam.color;

	onMount(() => {
		const storedData = localStorage.getItem(`exact_${teams.length}_teams`);
		if (storedData) {
			const parsedData = JSON.parse(storedData);
			if (parsedData && typeof parsedData === 'object') {
				teams.forEach((team) => {
					if (parsedData[team.color]) {
						pointsByTeam[team.color].set(parsedData[team.color].points);
					}
				});
				shotsPlayed = parsedData[teams[0].color]?.shots || 0;
				clickedCellsCount = shotsPlayed; // Update clickedCellsCount as well
			}
		}

		updatePointsDisplay(teams);
		updateTeamTurn(color);
	});

	/**
	 * Changes the current team to the next team in the list
	 * @returns void
	 */
	function changeTeam() {
		currentTeamIndex = (currentTeamIndex + 1) % teams.length;
		currentTeam = teams[currentTeamIndex];
		color = currentTeam.color;
		updateTeamTurn(color);
	}

	let lastRowNumbers: Record<string, number | null> = {};

	/**
	 * Handles the click event on the field.
	 * Colors the clicked cell in the color of the current Team and updates the points.
	 * Also doubles the points if the last row number is the same as the current row number.
	 * Updates the points in the localStorage.
	 * Updates the pointsByTeam and the points display.
	 * Increases the clickedCellsCount.
	 * Changes the current team.
	 * Checks if the game ended and opens a dialog if it did.
	 * @returns {number} newPoints
	 * @param {MouseEvent} event - The mouse event
	 * @returns void
	 */
	function handleClick(event: MouseEvent) {
		const targetId = (event.target as HTMLElement).id;
		const match = targetId.match(/row(\d+)-(\d+)/);

		if (match) {
			const rowNumber = parseInt(match[1]);
			let clickedCell: HTMLElement | null = document.getElementById(targetId);
			if (clickedCell) {
				clickedCell.style.backgroundColor = color;
				let team = teams.find((t) => t.color === color);
				if (team) {
					pointsByTeam[color].update((currentPoints: number) => {
						let newPoints = currentPoints;

						if (rowNumber >= 1 && rowNumber <= 6) {
							newPoints += 1;
						} else if (rowNumber === 7) {
							newPoints += 2;
						} else if (rowNumber === 8) {
							newPoints += 3;
						} else if (rowNumber === 9) {
							newPoints += 5;
						} else if (rowNumber === 10) {
							newPoints -= 1;
						}

						if (lastRowNumbers[color] === rowNumber) {
							if (rowNumber >= 1 && rowNumber <= 6) {
								newPoints += 1;
							} else if (rowNumber === 7) {
								newPoints += 2;
							} else if (rowNumber === 8) {
								newPoints += 3;
							} else if (rowNumber === 9) {
								newPoints += 5;
							} else if (rowNumber === 10) {
								newPoints -= 1;
							}
						}

						lastRowNumbers[color] = rowNumber; // set lastRowNumber to current rowNumber

						const storedData = localStorage.getItem(`exact_${teams.length}_teams`); // Get data from localStorage
						let parsedData = storedData ? JSON.parse(storedData) : {}; // Parse data from localStorage

						const currentTeam = parsedData.find((team: Team) => team.color === color);
						const newTargetId = targetId.replace('row', '');

						if (currentTeam) {
							currentTeam.points = newPoints;
							currentTeam.shots = clickedCellsCount;
							currentTeam.data.push(newTargetId);
						}

						console.log(parsedData);

						localStorage.setItem(`exact_${teams.length}_teams`, JSON.stringify(parsedData)); // Save data to localStorage
						return newPoints; // Update pointsByTeam
					});

					updatePoints(teams);
					updatePointsDisplay(teams);
					clickedCellsCount++;
				}
				changeTeam();
			}
		}

		// Check if the game ended
		if (clickedCellsCount === userInput * teams.length) {
			const winner = findWinner(teams);

			// Open dialog to ask if the user wants to restart the game when nobody won
			if (winner == 'Tie') {
				open_dialog({
					text: 'The Game ended Tie!',
					modal: false,
					confirm: {
						text: 'Restart Game',
						action: () => {
							resetGame(teams);
						}
					},
					cancel: null
				});
			} else {
				// Open dialog to ask if the user wants to restart the game when a winner is found
				open_dialog({
					text: `The winner is ${winner}! Do you want to play again?`,
					modal: false,
					confirm: {
						text: 'Restart Game',
						action: () => {
							resetGame(teams);
						}
					},
					cancel: null
				});
			}
		}
	}

	/**
	 * Requests a confirmation dialog to restart the game
	 * @returns void
	 */
	function request_restart_confirmation() {
		open_dialog({
			text: 'Do you really want to restart the game?',
			modal: false,
			confirm: {
				text: "Yes, I'm sure",
				action: () => {
					resetGame(teams);
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
		updateTeamTurn(color);
	});

	afterUpdate(() => {
		updateTeamTurn(color);
	});
</script>

<svelte:head>
	<title>{$_('exact_players', { values: { teams_length: teams.length } })}</title>
</svelte:head>

<h1>{$_('exact_players', { values: { teams_length: teams.length } })}</h1>

<p>
	{$_('number_of_shots_per_teams')}
	<input
		aria-label="Number of shots per Team"
		bind:value={userInput}
		type="number"
		name="shots"
		id="shots"
	/>
</p>

<p>
	{$_('exact_shots_left', {
		values: {
			shots_left: userInput * teams.length - clickedCellsCount,
			clickedCellsCount,
			total_shots: userInput * teams.length
		}
	})}
</p>

<p id="team_turn_display">
	{$_('current_team_turn', { values: { currentTeam_color: currentTeam.color } })}
</p>
<button on:click={changeTeam}>{$_('switch_team')}</button>
<button on:click={request_restart_confirmation}>{$_('reset_game')}</button>

<div id="points_display" />

<br />

<table id="field" style="display: flex; flex-direction: column;">
	{#each rows as { points, data }, outerIndex}
		<tbody id={`row${outerIndex + 1}`}>
			<tr>
				<td class="points">{points}</td>
				{#each data as value, innerIndex}
					<td
						class="meters"
						id={`row${outerIndex + 1}-${innerIndex}`}
						style="background-color: {teams[outerIndex]};"
						on:click={handleClick}
					>
						{value}
					</td>
				{/each}
			</tr>
		</tbody>
	{/each}
</table>

<Dialog />

<style lang="scss">
	@import '$lib/scss/Exact.scss';
</style>
