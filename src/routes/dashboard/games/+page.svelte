<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Real Golf - {$_('games')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('games')}</h1>

	<main>
		<p class="success">{$_('different_modis')}</p>

		<details>
			<summary>{$_('toc')}</summary>
			<ul class="no-bullets">
				<li><a href="#4-winning">{$_('4_winning')}</a></li>
				<li><a href="#exact">{$_('exact')}</a></li>
				<li><a href="#precision">{$_('precision')}</a></li>
			</ul>
		</details>

		<div class="games">
			<div class="gamess">
				<div class="card">
					<a href="/dashboard/games/4Winning" class="card_normal">
						<div>
							<h3 id="4-winning">{$_('4_winning')}</h3>
						</div>
					</a>
				</div>
				<div class="card">
					<a href="/dashboard/games/Exact" class="card_normal">
						<div>
							<h3 id="exact">{$_('exact')}</h3>
						</div>
					</a>
				</div>
			</div>

			<h2 id="precision">{$_('precision')}</h2>

			<div class="gamess">
				<div class="card">
					<a href="/dashboard/games/Precision/One-Player" class="card_normal">
						<div>
							<h3>{$_('one_player')}</h3>
							<p class="description">
								{$_('one_player_description', { values: { game_name: 'Precision' } })}
							</p>
						</div>
					</a>
				</div>
				<div class="card">
					<a href="/dashboard/games/Precision/Two-Players" class="card_normal">
						<div>
							<h3>{$_('two_players')}</h3>
							<p class="description">
								{$_('two_players_description', { values: { game_name: 'Precision' } })}
							</p>
						</div>
					</a>
				</div>
				<div class="card">
					<a href="/dashboard/games/Precision/Three-Players" class="card_normal">
						<div>
							<h3>{$_('three_players')}</h3>
							<p class="description">
								{$_('three_players_description', { values: { game_name: 'Precision' } })}
							</p>
						</div>
					</a>
				</div>
				<div class="card">
					<a href="/dashboard/games/Precision/Four-Players" class="card_normal">
						<div>
							<h3>{$_('four_players')}</h3>
							<p class="description">
								{$_('four_players_description', { values: { game_name: 'Precision' } })}
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</main>
{/if}

<style lang="scss">
	.games {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 90vw;
	}

	.gamess {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: left;

		@media screen and (max-width: 767px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.card {
			background-color: var(--nav-color);
			padding: 50px 50px;
			border-radius: var(--border-radius);
			border: 1px solid var(--border-color);
			margin: 15px;
			text-align: center;
			text-decoration: none !important;

			.card_normal {
				text-decoration: none !important;
			}

			&:hover {
				cursor: pointer;
				box-shadow: 10px 10px 20px var(--border-color);
			}
			h3 {
				text-align: center;
				text-decoration: underline !important;
			}

			.description {
				text-align: center;
				width: 50%;
				margin: 0 auto;
				text-decoration: none !important;
			}

			/* On Desktop: Cards are 40vw */
			@media (min-width: 768px) {
				width: calc(40vw);
			}

			/* On phone: Cards are 80vw */
			@media (max-width: 767px) {
				width: 80vw;

				.description {
					text-align: center;
					width: 100%;
					margin: 0 auto;
				}
			}
		}
	}
</style>
