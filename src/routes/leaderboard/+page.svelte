<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Real Golf - Leaderboard</title>
</svelte:head>

<div class="leaderboard">
	<h1>Leaderboard</h1>

	{#each data.users as user}
		{#if user.one_player_precision_highscore.all_time.value != null}
			<ol>
				<li>
					{user.user.username}
					{user.one_player_precision_highscore.all_time.value}
					{new Date(user.one_player_precision_highscore.all_time.lastUpdated).toLocaleDateString()}
				</li>
			</ol>
		{/if}
	{/each}
</div>

<style lang="scss">
	.leaderboard {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: left;
		border: 1px solid var(--border-color);
		margin-top: 1rem;

		h1 {
			background-color: var(--nav-color);
			width: 100%;
			text-align: center;
		}

		ol {
			margin-top: 1rem;

			li {
				display: flex;
				justify-content: space-between;
				width: 100%;
			}
		}
	}
</style>
