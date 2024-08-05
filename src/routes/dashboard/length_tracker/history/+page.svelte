<script lang="ts">
	import GoBack from '$lib/components/GoBack.svelte';

	type Club = {
		name: string;
		distance: number;
	};

	export let data: { clubs_history: [{ clubs: Club[] }] };
</script>

<svelte:head>
	<title>RealGolf.Games - Length Tracker History</title>
</svelte:head>

<h1>Length Tracker History</h1>

<GoBack />

{#if data.clubs_history}
	{#each data.clubs_history as club_history, i}
		{#if club_history.clubs.length > 0}
			<div class="history">
				<h2>Version {i + 1}</h2>
				<table>
					<thead>
						<tr>
							<th>Club</th>
							<th>Distance</th>
						</tr>
					</thead>
					<tbody>
						{#each club_history.clubs as club, i}
							<tr>
								<td>{club.name}</td>
								<td>{club.distance} yards</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	{/each}
{/if}

<style lang="scss">
	.history {
		margin-top: 30px;
		border: 1.5px solid var(--border-color);
		width: 100%;

		table {
			width: 100%;
			border-collapse: collapse;

			tr {
				th,
				td {
					border: 1px solid var(--border-color);
					padding: 0.5rem;
				}
			}
		}
	}
</style>
