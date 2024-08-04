<script lang="ts">
	import {
		andere_spielformen,
		ball_aufnehmen_und_ins_spiel_zurueckbringen,
		definitionen,
		die_grundlagen_des_spiels,
		erleichterung_mit_strafe,
		sonderregeln_fuer_bunker_und_gruens,
		spielen_der_runde_und_eines_loches,
		spielen_des_balls,
		straflose_erleichterung,
		vorgehensweise_fuer_die_spieler_und_die_spielleitung_bei_strittigen_faellen_der_regelanwendung
	} from './categories';
</script>

<svelte:head>
	<title>Real Golf - Golfregelwerk</title>
</svelte:head>

<main>
	<h1>Golfregelwerk</h1>

	<div class="parts">
		<div class="column">
			<h3>{die_grundlagen_des_spiels.title}</h3>
			{#each die_grundlagen_des_spiels.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<h3>{spielen_der_runde_und_eines_loches.title}</h3>
			{#each spielen_der_runde_und_eines_loches.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<h3>{spielen_des_balls.title}</h3>
			{#each spielen_des_balls.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<h3>{sonderregeln_fuer_bunker_und_gruens.title}</h3>
			{#each sonderregeln_fuer_bunker_und_gruens.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<h3>{ball_aufnehmen_und_ins_spiel_zurueckbringen.title}</h3>
			{#each ball_aufnehmen_und_ins_spiel_zurueckbringen.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<h3>{straflose_erleichterung.title}</h3>
			{#each straflose_erleichterung.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<h3>{erleichterung_mit_strafe.title}</h3>
			{#each erleichterung_mit_strafe.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<h3>
				{vorgehensweise_fuer_die_spieler_und_die_spielleitung_bei_strittigen_faellen_der_regelanwendung.title}
			</h3>
			{#each vorgehensweise_fuer_die_spieler_und_die_spielleitung_bei_strittigen_faellen_der_regelanwendung.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<h3>{andere_spielformen.title}</h3>
			{#each andere_spielformen.rules as rule}
				<a href="/rules/{rule.id}">{rule.title}</a>
			{/each}
		</div>
		<div class="column">
			<a href="/rules/{definitionen.id}"><h3>{definitionen.title}</h3></a>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		width: 80vw;
		margin: 0 auto;

		.parts {
			display: flex !important;
			flex-wrap: wrap !important;

			@media only screen and (max-width: 767px) {
				margin-right: -16px;
				margin-left: -16px;
				display: flex;
				flex-direction: column;
			}

			.column {
				display: flex;
				flex-direction: column;
				padding: 2rem;

				a {
					font-size: 1rem;
				}

				h3 {
					color: var(--accent-color);
				}
			}
		}
	}
</style>
