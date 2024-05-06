<script lang="ts">
	import Game from '$lib/components/Public/Games/Game.svelte';
	import { onMount } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';
	export let data: PageData;

	// eslint-disable-next-line
	let user_games: games[] | any[] = [];
	let user_username = data.user_username;

	onMount(() => {
		if (data.games) {
			user_games = data.games.reverse();
			console.log(user_games);
		}
	});

	console.log(user_games);
	let show_confirmation = false;
</script>

<svelte:head>
	<title>{data.user_username} - {$_('games')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h2>
		{$_('public_profile_games_by', {
			values: {
				username: data.user_username
			}
		})}:
	</h2>

	{#if show_confirmation}
		<div class="success" transition:slide={{ duration: 150 }}>{$_('copy_successful')}</div>
	{/if}

	<div class="user_games">
		{#if user_games}
			{#if user_games.length > 0}
				{#each user_games as { name, teams, data, date, id }}
					<Game {name} {teams} {data} {date} {id} bind:show_confirmation {user_username} />
				{/each}
			{:else}
				<p class="error">{$_('no_games_found_for_user')}</p>
			{/if}
		{/if}
	</div>
{/if}

<style lang="scss">
	.user_games {
		width: 80vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
</style>
