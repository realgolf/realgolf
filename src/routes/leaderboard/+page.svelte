<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';

	export let data;
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('leaderboard')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<main>
		<div class="leaderboard">
			<h1>{$_('leaderboard')}</h1>

			<table>
				<thead>
					<tr>
						<th>{$_('username')}</th>
						<th>{$_('score')}</th>
						<th>{$_('date')}</th>
					</tr>
				</thead>
				<tbody>
					{#each data.users as user}
						{#if user.one_player_precision_highscore.all_time.value != null}
							<tr>
								<td>{user.user.username}</td>
								<td>{user.one_player_precision_highscore.all_time.value}</td>
								<td>
									{#if user.one_player_precision_highscore.all_time.lastUpdated != null}
										{new Date(
											user.one_player_precision_highscore.all_time.lastUpdated
										).toLocaleDateString()}
									{:else}
										{$_('no_date')}
									{/if}
								</td>
							</tr>
						{/if}
					{/each}
				</tbody>
			</table>
		</div>
	</main>
{/if}

<style lang="scss">
	main {
		width: 90vw;
		margin: 0 auto;

		.leaderboard {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			border: 1px solid var(--border-color);
			margin-top: 1rem;
			width: 100%;

			@media screen and (min-width: 768px) {
				width: 50%;
			}

			h1 {
				background-color: var(--nav-color);
				width: 100%;
				text-align: center;
			}

			table {
				width: 100%;
				text-align: left;
				padding: 1rem;
			}
		}
	}
</style>
