<script>
	import Card from '$lib/components/Card.svelte';
	import GoBack from '$lib/components/GoBack.svelte';
</script>

<svelte:head>
	<title>Golfspiele Offline - Precision</title>
</svelte:head>

<GoBack />

<h1>Precision</h1>

<main>
	<div>
		<h2>Regeln</h2>

		<p>
			Das Ziel dieses Golfspiels "Precision" besteht darin, so viele Punkte wie möglich von den
			anfänglichen 100 Punkten durch präzise Schläge zu behalten. Für jeden Schlag wird die
			Abweichung des Balls von der Zielentfernung gemessen.
			<br />
			<br />
			Die Präzision wird anhand der Abweichung in Metern von der Zielentfernung gemessen. Je näher der
			Ball an der angegebenen Entfernung ist, desto weniger Punkte werden abgezogen. Es erfolgt eine
			Abzug von 1 Punkt pro Meter Abweichung vom Ziel.
			<br />
			<br />
			Am Ende des Spiels wird der Spieler, der die höchste Punktzahl von den anfänglichen 100 Punkten
			behalten hat, zum Gewinner erklärt. Das bedeutet, dass die Person mit der höchsten Punktzahl aufgrund
			der Abzüge als Sieger hervorgeht! Fairness und Respekt gegenüber anderen Spielern stehen im Vordergrund.
			Achten Sie unbedingt auf die Regeln und die Etikette des Spiels sowie auf die Richtlinien des Clubs.
			<br />
			<br />
			Sie können das Spiel interessanter gestalten, indem Sie zusätzliche Herausforderungen einführen,
			wie das Spielen bei unterschiedlichen Wetterbedingungen oder auf verschiedenen Geländen. Ob Sie
			Anfänger oder erfahrener Golfer sind, "Precision" bietet eine aufregende Gelegenheit, Ihre Fähigkeiten
			und Präzision zu zeigen. Genießen Sie das Spiel und die Gesellschaft Ihrer Mitspieler!
			<br />
			<br />
			Sind Sie bereit, Ihre Golfschwünge zu perfektionieren und so viele Punkte wie möglich zu behalten?
			Lassen Sie uns "Precision" spielen und herausfinden, wer am Ende die höchste Punktzahl erreicht!
		</p>
	</div>

	<div>
		<h2>Modi</h2>

		<main class="cards">
			<Card link="/games/precision/one-player" title="Ein Spieler" />
			<Card link="/games/precision/two-players" title="Zwei Spieler" />
			<Card link="/games/precision/three-players" title="Drei Spieler" />
			<Card link="/games/precision/four-players" title="Vier Spieler" />
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
