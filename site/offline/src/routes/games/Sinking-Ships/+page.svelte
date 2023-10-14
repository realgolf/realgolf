<svelte:head>
	<title>Golf Games Offline - Sinking Ships</title>
</svelte:head>

<h1>Sinking Ships</h1>

<main>
	<div>
		<h2>Rules</h2>

		<div>
			<p>
				Spielfeld: Jeder Spieler hat ein Spielfeld, das in Spalten von A bis J und in Zeilen von 1
				bis 10 unterteilt ist. Dies ergibt ein Raster von 10x10 Feldern. Schiffe: Jeder Spieler hat
				eine Flotte von Schiffen, die auf seinem Spielfeld platziert werden. Die üblichen Schiffe
				und ihre Größen sind:
			</p>

			<div class="margin-left">
				<li>1 Schlachtschiff (5 Felder)</li>
				<li>1 Kreuzer (4 Felder)</li>
				<li>2 Zerstörer (jeweils 3 Felder)</li>
				<li>2 U-Boote (jeweils 2 Felder)</li>
				<li>2 Patrouillenboote (jeweils 1 Feld)</li>
			</div>
			<p>
				Platzierung der Schiffe: Die Spieler platzieren abwechselnd ihre Schiffe auf ihrem
				Spielfeld, ohne dass sich die Schiffe berühren oder überlappen dürfen. Die genaue Position
				der Schiffe bleibt geheim. Spielverlauf: Die Spieler machen abwechselnd Schüsse, um die
				Schiffe ihres Gegners zu finden. Ein Schuss wird durch die Koordinaten angegeben, z. B.
				"A3". Der Spieler, der am Zug ist, sagt "Treffer" oder "Versenkt", wenn sein Schuss auf ein
				feindliches Schiff trifft oder dieses versenkt. Der getroffene Spieler markiert das
				Spielfeld des Gegners, um getroffene Schiffe anzuzeigen. Gewinnen: Das Spiel endet, wenn ein
				Spieler alle Schiffe seines Gegners versenkt hat. Dieser Spieler gewinnt das Spiel.
				Sonderregel: Manchmal wird vereinbart, dass ein Spieler nach einem Treffer ein weiteres
				Schussrecht hat, um zu versuchen, die Länge des getroffenen Schiffs zu ermitteln und es
				schneller zu versenken.
			</p>
		</div>
	</div>

	<div>
		<h2>Modi</h2>
	</div>
</main>

<!-- <style lang="scss">
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
</style> -->
