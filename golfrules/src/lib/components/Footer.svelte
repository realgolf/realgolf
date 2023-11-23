<script>
	import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import DieGrundlagenDesSpieles from './Footer/die-grundlagen-des-spieles.svelte';
	import SpielenDerRundeUndEinesLochs from './Footer/spielen-der-runde-und-eines-lochs.svelte';
</script>

<footer>
	<div class="content">
		<section class="parts">
			<DieGrundlagenDesSpieles />
			<SpielenDerRundeUndEinesLochs></SpielenDerRundeUndEinesLochs>
		</section>

		<h3>Hilfe und Support</h3>
		<section class="info">
			<div class="contribution">
				<h4>Helfen Sie uns dieses Regelwerk besser zumachen!</h4>
				<p class="grey">
					Dieses Regelwerk is Open-Source. Sie haben was endeckt, dass falsch oder unklar ist?
				</p>
				<p class="grey">Erstellen Sie eine Pull Request oder erstellen Sie ein Issue.</p>
				<a href="https://github.com/moinjulian/golf">
					<button><span><Fa icon={faCodePullRequest} /></span>Machen Sie ein Beitrag</button>
				</a>
			</div>
		</section>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100vw;
		background-color: var(--background-color);
		border-top: 1px solid var(--border-color);
		margin-top: 2rem;
		display: flex;
		justify-content: center;
		align-items: left;
		flex-direction: column;

		.content {
			padding: 1rem 1rem;

			.parts {
				display: flex;
				flex-wrap: wrap;
			}

			.info {
				padding: 0.5rem;
				display: flex;
				flex-direction: row;
				border-top: 1px solid var(--border-color);

				.contribution {
					max-width: 90vw;
				}

				button {
					background-color: var(--background-color);
					border: 1px solid var(--accent-color);
				}
			}
		}

		.grey {
			color: grey;
			font-size: 0.9rem;
		}

		span {
			margin-right: 0.5rem;
		}
	}
</style>
