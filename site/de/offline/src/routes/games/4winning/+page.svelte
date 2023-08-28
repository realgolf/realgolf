<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import GoBack from '$lib/components/GoBack.svelte';
</script>

<svelte:head>
	<title>Golfspiele Offline - 4 Winning</title>
</svelte:head>

<GoBack />

<h1>4 Winning</h1>

<main>
	<div>
		<h2>Regeln</h2>

		<p>
			Die Regeln des Spiels sind sehr einfach, es handelt sich nur um eine Art Vier-gewinnt-Spiel.
			Sie klicken auf den Button, welchen Sie aus der Entfernung treffen. Nach dem Zug des ersten
			Teams ist das zweite Team an der Reihe und wählt ein Feld aus, unabhängig davon, ob es bereits
			von einem anderen Team ausgewählt wurde. Anschließend ist das nächste Team an der Reihe; Sie
			können oben im jeweiligen Spiel erkennen, welches Team gerade an der Reihe ist. Das Spiel geht
			weiter, bis ein Team vier Felder in einer Reihe oder Spalte hat. Wenn Sie dasselbe Feld viermal
			anklicken, erscheint eine Nachricht, die besagt, dass Sie dasselbe Feld bereits viermal
			angeklickt haben. Wenn ein Team gewinnt, werden die Werte der Felder zurückgesetzt und Sie
			können von vorne beginnen. Das Spiel wechselt automatisch zwischen den Teams. Alle oben genannten
			Informationen gelten für alle Spiele!
		</p>
	</div>

	<div>
		<h2>Modi</h2>

		<main class="cards">
			<Card link="/games/4winning/two-players" title="2 Teams" />
			<Card link="/games/4winning/three-players" title="3 Teams" />
			<Card link="/games/4winning/four-players" title="4 Teams" />
		</main>
	</div>
</main>

<style lang="scss">
	.cards {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: left;
		flex-wrap: wrap; /* Elemente unterhalb der Breite umbrechen */

		@media screen and (max-width: 767px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
