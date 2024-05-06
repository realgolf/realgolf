<script lang="ts">
	import { _ } from 'svelte-i18n';

	// Exporting the following variables as props
	export let name: string;
	export let date: string;
	export let id: string;
	export let teams: string;
	export let data: string;
	export let show_confirmation: boolean;
	export let user_username: string | null | undefined;

	const dataObj = JSON.parse(data);
	let interleavedData: { color: string; value: string }[] = [];

	// Check if "4winning" is not included in teams
	if (teams.includes('4winning')) {
		// Separate data arrays for each color
		const redData = dataObj.find((obj: { color: string }) => obj.color === 'red')?.data || [];
		const blueData = dataObj.find((obj: { color: string }) => obj.color === 'blue')?.data || [];

		// Interleave the data arrays
		for (let i = 0; i < Math.max(redData.length, blueData.length); i++) {
			if (i < redData.length) interleavedData.push({ color: 'red', value: redData[i] });
			if (i < blueData.length) interleavedData.push({ color: 'blue', value: blueData[i] });
		}

		console.log(interleavedData);
	}

	function extractDomain(url: string): string | null {
		try {
			const parsedUrl = new URL(url);
			// Check if the port is specified, and include it in the domain
			const domainWithPort = parsedUrl.port
				? `${parsedUrl.hostname}:${parsedUrl.port}`
				: parsedUrl.hostname;
			return domainWithPort;
		} catch (error) {
			// URL parsing failed
			return null;
		}
	}

	async function shareGame(id: string) {
		const user = user_username;
		const domain = extractDomain(window.location.href);

		const url = `${domain}/${user}/games/${id}`;

		console.log(url);

		await window.navigator.clipboard.writeText(url);
		show_confirmation = true;
		setTimeout(() => {
			show_confirmation = false;
		}, 1500);
	}

	function openGame(id: string) {
		const user = user_username;

		const url = `/${user}/games/${id}`;
		window.location.href = url;
	}
</script>

<div class="games">
	<p>{name}</p>
	<p>{teams}</p>
	<p>
		{$_('date_of_play')}: {new Date(date).toLocaleDateString()}
	</p>
	<ul>
		{#each interleavedData as data}
			<li class="{data.color} hit">{data.color} - {data.value}</li>
		{/each}
	</ul>
	<button on:click={() => shareGame(id)}>{$_('share_game')}</button>
	<button on:click={() => openGame(id)}>{$_('open_game')}</button>
</div>

<style lang="scss">
	.games {
		margin: 10px;
		padding: 10px;
		border: 1px solid #ccc;
	}

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
