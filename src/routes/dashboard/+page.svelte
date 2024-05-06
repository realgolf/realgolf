<script lang="ts">
	import FourWinningTable from '$lib/components/Archive/FourWinning_table.svelte';
	import { asignNameToTeam } from '$lib/shared/utils/asignNameToTeam';
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { _, isLoading } from 'svelte-i18n';

	// eslint-disable-next-line
	export let data: any;
</script>

<svelte:head>
	<title>Real Golf - {$_('dashboard')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<main>
		<h2>{$_('dashboard')}</h2>

		<p
			use:sanitizeHTML={[
				$_('dashboard_welcome', {
					values: {
						user_name: data.name
					}
				})
			]}
		/>

		<div class="card">
			<h2>{$_('one_player_precision_highscore_title')}</h2>
			{#if data?.daily?.lastUpdated == null}
				<p use:sanitizeHTML={[$_('no_highscore_yet')]} />
			{:else if data?.daily?.lastUpdated != null}
				<ul>
					<li
						use:sanitizeHTML={[
							$_('daily_highscore', {
								values: {
									dailyValue: data?.daily?.value,
									lastUpdatedDate: new Date(data?.daily?.lastUpdated).toLocaleDateString()
								}
							})
						]}
					/>
					<li
						use:sanitizeHTML={[
							$_('weekly_highscore', {
								values: {
									weeklyValue: data?.weekly?.value,
									lastUpdatedDate: new Date(data?.weekly?.lastUpdated).toLocaleDateString()
								}
							})
						]}
					/>
					<li
						use:sanitizeHTML={[
							$_('monthly_highscore', {
								values: {
									monthlyValue: data?.monthly?.value,
									lastUpdatedDate: new Date(data?.monthly?.lastUpdated).toLocaleDateString()
								}
							})
						]}
					/>
					<li
						use:sanitizeHTML={[
							$_('yearly_highscore', {
								values: {
									yearlyValue: data?.yearly?.value,
									lastUpdatedDate: new Date(data?.yearly?.lastUpdated).toLocaleDateString()
								}
							})
						]}
					/>
				</ul>
				<p
					use:sanitizeHTML={[
						$_('all_time_highscore', {
							values: {
								allTimeValue: data?.all_time?.value,
								lastUpdatedDate: new Date(data?.all_time?.lastUpdated).toLocaleDateString()
							}
						})
					]}
				/>
			{/if}
		</div>

		<div class="card">
			<h2>{$_('latest_game_saved')}</h2>
			{#if !data?.error}
				{#if data?.game?.teams.includes('4winning')}
					<FourWinningTable measurement_units={data?.measurement_units} data={data?.game?.data} />
				{:else}
					<p>{data.game.data}</p>
				{/if}
				<p>{$_('name_of_game')}: {data?.game?.name}</p>
				{#if data.game.is_over == true}
					<p>{$_('game_has_finished', { values: { name: data.game.name } })}</p>
				{:else if data.game.is_over == false}
					<p>{$_('game_can_continue', { values: { name: data.game.name } })}</p>
				{:else}
					<p>{$_('no_game_state')}</p>
				{/if}
				<p>{$_('date_of_play')}: {new Date(data?.game?.date).toLocaleDateString()}</p>
				<p>
					{$_('game_associated_with')}: {asignNameToTeam(data?.game?.teams)}
				</p>
				<p use:sanitizeHTML={[$_('see_all_games')]} />
			{:else}
				<p class="error" use:sanitizeHTML={[$_('error_loading_latest_game')]} />
			{/if}
		</div>
	</main>
{/if}

<style lang="scss">
	.card {
		border: 2px solid var(--border-color);
		margin: 10px 20px;
		padding: 15px;
		box-shadow: 2px 2px 4px var(--shadow-color);

		ul {
			margin-left: 1rem;
		}
	}
</style>
