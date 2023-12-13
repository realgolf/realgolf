<script>
	import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import AndereSpielformen from './Footer/andere-spielformen.svelte';
	import BallAufnehmenUndInsSpielZurckbringen from './Footer/ball-aufnehmen-und-ins-spiel-zurückbringen.svelte';
	import DieGrundlagenDesSpieles from './Footer/die-grundlagen-des-spieles.svelte';
	import ErleichterungMitStrafe from './Footer/erleichterung-mit-strafe.svelte';
	import SonderregelnFuerBunkerUndGruens from './Footer/sonderregeln-fuer-bunker-und-gruens.svelte';
	import SpielenDerRundeUndEinesLochs from './Footer/spielen-der-runde-und-eines-lochs.svelte';
	import SpielenDesBalls from './Footer/spielen-des-balls.svelte';
	import StrafloseErleichterung from './Footer/straflose-erleichterung.svelte';
	import VorgehensweiseFrDieSpielerUndDieSpielleitungBeiStrittigenFllenDerRegelanwendung from './Footer/vorgehensweise-für-die-spieler-und-die-spielleitung-bei-strittigen-fällen-der-regelanwendung.svelte';
</script>

<footer>
	<div class="content">
		<section class="parts">
			<DieGrundlagenDesSpieles />
			<SpielenDerRundeUndEinesLochs></SpielenDerRundeUndEinesLochs>
			<SpielenDesBalls></SpielenDesBalls>
			<SonderregelnFuerBunkerUndGruens></SonderregelnFuerBunkerUndGruens>
			<BallAufnehmenUndInsSpielZurckbringen></BallAufnehmenUndInsSpielZurckbringen>
			<StrafloseErleichterung></StrafloseErleichterung>
			<ErleichterungMitStrafe></ErleichterungMitStrafe>
			<VorgehensweiseFrDieSpielerUndDieSpielleitungBeiStrittigenFllenDerRegelanwendung
			></VorgehensweiseFrDieSpielerUndDieSpielleitungBeiStrittigenFllenDerRegelanwendung>
			<AndereSpielformen></AndereSpielformen>
		</section>

		<h3>Hilfe und Support</h3>
		<section class="info">
			<div class="contribution">
				<h4>Helfen Sie uns dieses Regelwerk besser zumachen!</h4>
				<p class="grey">
					Dieses Regelwerk is Open-Source. Sie haben was endeckt, dass falsch oder unklar ist?
				</p>
				<p class="grey">Erstellen Sie eine Pull Request oder erstellen Sie ein Issue.</p>
				<a href="https://github.com/moinjulian/golf" target="_blank">
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
