<script>
	import Card from '$lib/components/Card.svelte';
	import GoBack from '$lib/components/GoBack.svelte';
</script>

<svelte:head>
	<title>Golfspiele Offline - Exact</title>
</svelte:head>

<GoBack />

<h1>Exact</h1>

<main>
	<div>
		<h2>Regeln</h2>

		<ul class="no-bullets">
			<li>Es wird abwechselnd gespielt</li>
			<li>Klicken Sie auf das Feld, das Sie treffen</li>
			<li>Beachten Sie die Level</li>
			<li>Nur die ganze Zahl ist gültig</li>
		</ul>
	</div>

	<div>
		<h2>Level</h2>

		<ul class="no-bullets">
			<li><b>Bronze: </b>Nur die Länge des Schusses zählt</li>
			<li>
				<b>Silber: </b>Die Anzahl der Meter und die seitliche Abweichung zählen. - Die seitliche Abweichung
				wird von den Spielern gewählt
			</li>
			<li>
				<b>Gold: </b>Felder können nur nach vorheriger Ankündigung gespielt werden. Der Rest ist wie Silber
			</li>
			<li><b>Platin</b>Wie Gold, alles mit einem Schläger.</li>
		</ul>
	</div>

	<div>
		<h2>Modi</h2>

		<main class="cards">
			<Card link="/games/exact/two-players" title="2 Teams" />
			<Card link="/games/exact/three-players" title="3 Teams" />
			<Card link="/games/exact/four-players" title="4 Teams" />
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
