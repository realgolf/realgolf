<script lang="ts">
	const board = [
		{
			letter: '',
			numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		},
		{
			letter: 'A',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'B',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'C',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'D',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'E',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'F',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'G',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'H',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'I',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		},
		{
			letter: 'J',
			numbers: ['', '', '', '', '', '', '', '', '', '']
		}
	];
</script>

<svelte:head>
	<title>Sinking Ships - 2 Players</title>
</svelte:head>

<h1>Sinking Ships - 2 Players</h1>

<table>
	{#each board as { letter, numbers }}
		<tbody>
			<tr>
				<td class="points">{letter}</td>
				{#each numbers as number}
					<td class="meters">{number}</td>
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

	.meters,
	.points {
		flex: 0 0 25%;
		box-sizing: border-box;
		border: 5px solid var(--border-color);
		min-width: calc(80vw / 15);
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
