<script lang="ts">
	// Importing the openGame function from the specified file
	import { openGame } from '$lib/scripts/Archive/openGame';
	// Importing the Dialog component from the specified file
	import { _ } from 'svelte-i18n';
	import Dialog from '../Global/Dialog.svelte';

	// Exporting the following variables as props
	export let name: string;
	export let date: string;
	export let id: string;
	export let teams: string;
	export let data: string;
	export let is_over: boolean;

	const dataObj = JSON.parse(data);
	let interleavedData: { color: string; value: string }[] = [];

	// Check if "4winning" is not included in teams
	if (teams.includes('4winning')) {
		// Separate data arrays for each color
		const redData = dataObj.find((obj: { color: string }) => obj.color === 'red')?.data || [];
		const blueData = dataObj.find((obj: { color: string }) => obj.color === 'blue')?.data || [];
		const greenData = dataObj.find((obj: { color: string }) => obj.color === 'green')?.data || [];
		const orangeData = dataObj.find((obj: { color: string }) => obj.color === 'orange')?.data || [];
		const pinkData = dataObj.find((obj: { color: string }) => obj.color === 'pink')?.data || [];
		const yellowData = dataObj.find((obj: { color: string }) => obj.color === 'yellow')?.data || [];

		// Interleave the data arrays
		for (let i = 0; i < Math.max(redData.length, blueData.length); i++) {
			if (i < redData.length) interleavedData.push({ color: 'red', value: redData[i] });
			if (i < blueData.length) interleavedData.push({ color: 'blue', value: blueData[i] });
			if (i < greenData.length) interleavedData.push({ color: 'green', value: greenData[i] });
			if (i < orangeData.length) interleavedData.push({ color: 'orange', value: orangeData[i] });
			if (i < pinkData.length) interleavedData.push({ color: 'pink', value: pinkData[i] });
			if (i < yellowData.length) interleavedData.push({ color: 'yellow', value: yellowData[i] });
		}

		console.log(interleavedData);
	}
</script>

<div class="game">
	<form action="?/rename" method="POST">
		<input
			type="text"
			name="name"
			id="name"
			class="headline"
			bind:value={name}
			aria-label="Name of the Game"
		/>
		<input class="hidden" type="text" name="id" value={id} />
		<button>{$_('update_name')}</button>
	</form>
	<p>{$_('created_at', { values: { date: new Date(date).toLocaleDateString() } })}</p>
	<ul>
		{#each interleavedData as data}
			<li class="{data.color} hit">{data.color} - {data.value}</li>
		{/each}
	</ul>
	{#if is_over == true}
		<p>{$_('game_has_finished', { values: { name } })}</p>
	{:else if is_over == false}
		<p>{$_('game_can_continue', { values: { name } })}</p>
	{:else}
		<p>{$_('no_game_state')}</p>
	{/if}
	<button on:click={() => openGame(data, teams)}>{$_('open_game')}</button>
	<form action="?/delete_game" method="POST" autocomplete="off">
		<input class="hidden" type="text" name="id" value={id} />
		<button>{$_('delete_game')}</button>
	</form>
</div>

<Dialog />

<style lang="scss">
	.red {
		color: red;
	}

	.blue {
		color: blue;
	}

	.green {
		color: green;
	}

	.orange {
		color: orange;
	}

	.hit {
		margin-left: 1rem;
	}

	li::marker {
		margin-left: 1rem;
		padding-right: 0.5rem;
		color: var(--font-color);
	}

	@import '$lib/scss/Archive/game.scss';
</style>
