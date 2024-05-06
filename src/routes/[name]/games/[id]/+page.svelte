<script lang="ts">
	import FourWinningTable from '$lib/components/Archive/FourWinning_table.svelte';
	import { _, isLoading } from 'svelte-i18n';

	export let data;
</script>

<svelte:head>
	{#if data.game}
		<title
			>{$_('public_game_from', {
				values: { game_name: data.game.name, user_name: data.param_name }
			})}</title
		>
	{:else}
		<title>404 - {$_('game_not_found')}</title>
	{/if}
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>
		{#if data.game}
			{$_('public_game', {
				values: {
					game_name: data.game.name,
					game_date: new Date(data.game.date).toLocaleDateString()
				}
			})}
		{:else}
			404 - {$_('game_not_found')}
		{/if}
	</h1>

	{#if data.game}
		<p class="data">{data.game.data}</p>

		{#if data.game.teams.includes('4winning_')}
			<FourWinningTable measurement_units="yards" data={data.game.data} />
		{/if}
	{/if}
{/if}
