<script lang="ts">
	import FourWinningTable from '$lib/components/Archive/FourWinning_table.svelte';
	import Comments from '$lib/components/Comments.svelte';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import type { FormData } from './$types';

	export let data;
	export let form: FormData;

	function go_back() {
		location.href = '/games';
	}
</script>

<svelte:head>
	<title>{$_('game')} - {data?.game.id}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<button class="back" on:click={go_back}><Fa icon={faArrowLeft}></Fa></button>

	{#if form?.error}
		<p class="error">{form.status} - {form.error}</p>
	{/if}

	{#if form?.message}
		<p class="success">{form.status} - {form.message}</p>
	{/if}

	<h1>
		{#if data.game}
			{$_('public_game', {
				values: {
					game_name: data.game.name,
					game_date: new Date(data?.game.date).toLocaleDateString()
				}
			})}
		{:else}
			404 - {$_('game_not_found')}
		{/if}
	</h1>

	{#if data?.game.owner}
		<h2>{$_('owner')}</h2>
		<p>{data.game.owner}</p>
	{/if}

	{#if data?.game.type}
		<h2>{$_('type')}</h2>
		<p>{data.game.type}</p>
	{/if}

	{#if data.game}
		<p class="data">{data.game.data}</p>

		{#if data?.game?.teams.includes('4winning_')}
			<FourWinningTable measurement_units="yards" data={data.game.data} />
		{/if}
	{/if}

	<Comments comments={data.game?.comments}></Comments>
{/if}

<style lang="scss">
	.back {
		background-color: transparent;
		border: none !important;
		outline: none !important;
	}
</style>
