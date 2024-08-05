<script lang="ts">
	import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';

	export let data: { clubs: Club[] };

	type Club = {
		name: string;
		distance: number;
	};

	let clubs: Club[] = [
		{ name: '3 Wood', distance: 0 },
		{ name: '5 Wood', distance: 0 },
		{ name: '3 Iron', distance: 0 },
		{ name: '4 Iron', distance: 0 },
		{ name: '5 Iron', distance: 0 },
		{ name: '6 Iron', distance: 0 },
		{ name: '7 Iron', distance: 0 },
		{ name: '8 Iron', distance: 0 },
		{ name: '9 Iron', distance: 0 },
		{ name: 'Driver', distance: 0 },
		{ name: 'PW', distance: 0 },
		{ name: 'GW', distance: 0 },
		{ name: 'SW', distance: 0 },
		{ name: 'LW', distance: 0 }
	];

	onMount(() => {
		if (data && data.clubs && data.clubs.length > 0) {
			clubs = data.clubs;
		}
		sort_clubs();
	});

	function sort_clubs() {
		clubs = [...clubs].sort((a, b) => {
			const aIndex = a.name.indexOf(' ');
			const bIndex = b.name.indexOf(' ');
			const aType = a.name.slice(aIndex + 1);
			const bType = b.name.slice(bIndex + 1);

			if (aType === bType) {
				return a.name < b.name ? -1 : 1;
			}
			if (aType === 'Wood') return -1;
			if (bType === 'Wood') return 1;
			if (aType === 'Iron') return -1;
			if (bType === 'Iron') return 1;
			return a.name < b.name ? -1 : 1;
		});
	}

	function add_club() {
		const name = prompt('Enter the name of the club');
		if (name) {
			clubs = [...clubs, { name, distance: 0 }];
			sort_clubs();
		}
	}

	function submit_form() {
		const form = document.querySelector('form');
		if (form) {
			const clubs_input = form.querySelector('#clubs') as HTMLInputElement;
			if (clubs_input) {
				clubs_input.value = JSON.stringify(clubs);
				form.submit();
			}
		}
	}

	function delete_club(index: number) {
		clubs = clubs.filter((_, i) => i !== index);
	}
</script>

<svelte:head>
	<title>Real Golf - Length Tracker</title>
</svelte:head>

<h1>Length Tracker</h1>

<p>
	You can add your clubs and the distance you hit each one here. If you update a distance and save
	it, the previous distance is saved in a history log, which you can view to track your progress.
</p>

<a href="/dashboard/length_tracker/history">History Log</a>

<table>
	<thead>
		<tr>
			<th>Club</th>
			<th>Distance</th>
		</tr>
	</thead>
	<tbody>
		{#each clubs as club, index}
			<tr>
				<td>
					<input type="text" bind:value={club.name} />
				</td>
				<td>
					<input type="number" bind:value={club.distance} />
				</td>
				<td>
					<button type="button" class="trash" on:click={() => delete_club(index)}
						><Fa icon={faTrashAlt} /></button
					>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<button type="button" class="utils" on:click={add_club}>Add Club</button>

<form action="" method="POST">
	<input type="text" name="clubs" id="clubs" bind:value={clubs} hidden />
	<button type="button" class="utils" on:click={submit_form}>Save</button>
</form>

<style lang="scss">
	.trash {
		background: none;
		border: none;
		color: red;
		cursor: pointer;
		margin-left: 1rem;
	}

	.utils {
		margin-top: 1rem;
	}
</style>
