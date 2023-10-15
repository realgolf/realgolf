<script lang="ts">
	import { onMount } from 'svelte';

	interface Board {
		letter: string;
		numbers: string[];
	}

	let currentTeam = 'red';
	let displayTeam = currentTeam.charAt(0).toUpperCase() + currentTeam.slice(1);

	onMount(() => {
		let displayTeamColor = document.getElementById('letter') as HTMLElement;
		displayTeamColor.style.backgroundColor = currentTeam;
	});

	const board: Board[] = [
		{
			letter: `${displayTeam}`,
			numbers: [
				'1 <br> <small>0-19 meter</small>',
				'2 <br> <small>20-39 meter</small>',
				'3 <br> <small>40-59 meter</small>',
				'4 <br> <small>60-79 meter</small>',
				'5 <br> <small>80-99 meter</small>',
				'6 <br> <small>100-119 meter</small>',
				'7 <br> <small>120-139 meter</small>',
				'8 <br> <small>140-159 meter</small>',
				'9 <br> <small>160-179 meter</small>',
				'10 <br> <small>180-199 meter</small>'
			]
		},
		{
			letter: 'A <br> <small>0-19 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'B <br> <small>20-39 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'C <br> <small>40-59 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'D <br> <small>60-79 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'E <br> <small>80-99 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'F <br> <small>100-119 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'G <br> <small>120-139 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'H <br> <small>140-159 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'I <br> <small>160-179 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'J <br> <small>180-199 meter</small>',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		}
	];

	interface Team {
		color: string;
		data: number[];
		points: number;
	}

	let teams: Team[] = [
		{ color: 'red', data: [], points: 0 },
		{ color: 'blue', data: [], points: 0 }
	];

	function handleClick(event: MouseEvent) {
		const targetId = (event.target as HTMLElement).id;
		const match = targetId.match(/row(\d+)-(\d+)/);

		if (match) {
			let clickedCell: HTMLElement | null = document.getElementById(targetId);

			if (clickedCell) {
				clickedCell.style.backgroundColor = teams[0].color;
			}
		}

		console.log(match);
	}
</script>

<svelte:head>
	<title>Sinking Ships - 2 Players</title>
</svelte:head>

<h1>Sinking Ships - 2 Players</h1>

<table>
	{#each board as { letter, numbers }, outerIndex}
		<tbody id={`row${outerIndex + 1}`}>
			<tr>
				<td class="points" id="letter">{@html letter}</td>
				{#each numbers as value, innerIndex}
					<td
						class="meters"
						id={`row${outerIndex + 1}-${innerIndex}`}
						style="background-color: {teams[outerIndex]};"
						on:click={handleClick}>{@html value}</td
					>
				{/each}
			</tr>
		</tbody>
	{/each}
</table>

<style>
	table {
		margin-left: auto;
		margin-right: auto;
	}

	#letter {
		background-color: transparent;
	}

	.meters,
	.points {
		flex: 0 0 25%;
		box-sizing: border-box;
		min-width: calc(80vw / 11);
		border: 5px solid var(--border-color);
		height: calc(30vh / 8);
		text-align: center;
	}

	.meters:hover {
		cursor: pointer;
	}

	button {
		cursor: pointer;
		border: 5px solid var(--border-color);
	}

	input {
		color: var(--font-color);
		background-color: var(--bg-color);
		border: 2px solid var(--border-color);
		box-shadow: none;
		font-size: var(--medium-font);
	}
</style>
