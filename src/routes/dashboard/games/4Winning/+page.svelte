<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';

	const teams: Array<{ pos: number; name: string; color: string; data: string[] }> = [
		{ pos: 1, name: '', color: 'red', data: [] },
		{ pos: 2, name: '', color: 'blue', data: [] },
		{ pos: 3, name: '', color: 'green', data: [] },
		{ pos: 4, name: '', color: 'orange', data: [] },
		{ pos: 5, name: '', color: 'pink', data: [] },
		{ pos: 6, name: '', color: 'yellow', data: [] }
	];
</script>

<svelte:head>
	<title>{$_('4_winning')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('4_winning')}</h1>

	<p>Choose the size of the team and the color and name for each player.</p>

	<div class="choose">
		{#each teams as teamMember}
			<div class="team_member">
				<label for="name">Enter the name for the Player</label>
				<input type="text" name="name" id="name" bind:value={teamMember.name} />
				<label for="color">Enter the color for the Player:</label>
				<input
					type="text"
					name="color"
					id="color"
					bind:value={teamMember.color}
					style="color: {teamMember.color};"
				/>
			</div>
		{/each}
	</div>
{/if}
