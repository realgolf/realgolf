<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;

	import { _ } from 'svelte-i18n';
</script>

<div id="one_player_precision">
	<h2>{$_('one_player_precision_highscore_title')}</h2>
	{#if data?.user_daily?.lastUpdated == null}
		<p>{$_('public_user_never_played_one_player_precision', {
			values: { username: data.user_username }
		})}</p>
	{:else if data?.user_daily?.lastUpdated != null && data?.user_weekly?.lastUpdated != null && data?.user_monthly?.lastUpdated != null && data?.user_yearly?.lastUpdated != null && data?.user_all_time?.lastUpdated != null}
		<ul>
			<li
				use:sanitizeHTML={[
					$_('daily_highscore', {
						values: {
							dailyValue: data.user_daily?.value,
							lastUpdatedDate: new Date(data.user_daily.lastUpdated).toLocaleDateString()
						}
					})
				]}
			/>
			<li
				use:sanitizeHTML={[
					$_('weekly_highscore', {
						values: {
							weeklyValue: data.user_weekly?.value,
							lastUpdatedDate: new Date(data.user_weekly.lastUpdated).toLocaleDateString()
						}
					})
				]}
			/>
			<li
				use:sanitizeHTML={[
					$_('monthly_highscore', {
						values: {
							monthlyValue: data?.user_monthly?.value,
							lastUpdatedDate: new Date(data?.user_monthly?.lastUpdated).toLocaleDateString()
						}
					})
				]}
			/>
			<li
				use:sanitizeHTML={[
					$_('yearly_highscore', {
						values: {
							yearlyValue: data?.user_yearly?.value,
							lastUpdatedDate: new Date(data?.user_yearly?.lastUpdated).toLocaleDateString()
						}
					})
				]}
			/>
		</ul>
		<p
			use:sanitizeHTML={[
				$_('public_user_all_time_highscore', {
					values: {
						username: data.user_username,
						allTimeValue: data?.user_all_time?.value,
						lastUpdatedDate: new Date(data?.user_all_time?.lastUpdated).toLocaleDateString()
					}
				})
			]}
		/>
	{/if}
</div>

<style lang="scss">
	#one_player_precision {
		background-color: var(--nav-color);
		margin-left: 20px;
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius);

		& > * {
			padding: 20px;
		}

		ul {
			margin-left: 20px;
			list-style-type: square;
		}
	}
</style>
