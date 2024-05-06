<script lang="ts">
	import { rows, setToNewRows } from '$lib/scripts/FourWinning_table/rows';
	import type { GameData } from '$lib/scripts/FourWinning_table/types';
	import { capitalizeFirstLetter } from '$lib/shared/utils/capitalizeFirstLetter';
	import { onMount } from 'svelte';

	export let measurement_units; // Input prop for measurement units
	export let data; // Input prop for game data

	let capitalizedMeasurementUnit = capitalizeFirstLetter(measurement_units); // Capitalize the measurement units
	let game_data = data; // Assign the game data to a local variable
	let newRows = rows; // Assign the rows to a local variable

	/**
	 * Colorize the fields based on the game data
	 * @returns void
	 */
	function colorFields() {
		let gameData: GameData[] = JSON.parse(game_data); // Parse the game data as an array of GameData objects

		gameData.forEach(({ color, data: colorData }) => {
			newRows.forEach((row) => {
				row.data.forEach((field) => {
					if (colorData.includes(field.id)) {
						field.color = color; // Set the color of the field if its ID is included in the colorData
					}
				});
			});
		});

		newRows = newRows; // Update the newRows variable

		setToNewRows(newRows); // Update the rows with the newRows
	}

	onMount(() => {
		colorFields(); // Call the colorFields function on component mount
	});
</script>

<table>
	{#each newRows as { side, data }, outerIndex}
		<tbody id={`row${outerIndex + 1}`}>
			<tr>
				<td class="points">{side} {capitalizedMeasurementUnit}</td>
				<!--Display the side and capitalized measurement unit-->
				{#each data as { value, color }, innerIndex}
					<td
						class="meters"
						id={`row${outerIndex + 1}-${innerIndex}`}
						style={`background-color: ${color}`}
					>
						{value}
					</td>
				{/each}
				<td class="points">{side} {capitalizedMeasurementUnit}</td>
				<!--Display the side and capitalized measurement unit-->
			</tr>
		</tbody>
	{/each}
</table>

<style>
	.meters,
	.points {
		flex: 0 0 25%;
		box-sizing: border-box;
		border: 5px solid var(--border-color);
		min-width: calc(30vw / 15);
		height: calc(16.7vh / 8);
		text-align: center;
	}

	@media only screen and (max-width: 600px) {
		table {
			display: none; /*Hide the table on screens with max-width of 600px*/
		}
	}
</style>
