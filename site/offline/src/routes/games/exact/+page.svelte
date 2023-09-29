<script>
	import Card from '$lib/components/Card.svelte';
	import GoBack from '$lib/components/GoBack.svelte';
</script>

<svelte:head>
	<title>Golf Games Offline - Exact</title>
</svelte:head>

<GoBack />

<h1>Exact</h1>

<main>
	<div>
		<h2>Rules</h2>

		<ul class="no-bullets">
			<li>It is played alternately</li>
			<li>Click the Field you hit</li>
			<li>Respect the levels</li>
			<li>Only the intger number applies</li>
		</ul>
	</div>

	<div>
		<h2>Levels</h2>

		<ul class="no-bullets">
			<li><b>Bronze: </b>Only the lenght of the shot applies</li>
			<li>
				<b>Silver: </b>The number of meters and the lateral deviation apply. - lateral deviation
				gets choosed by the players
			</li>
			<li>
				<b>Gold: </b>Fields can only be played after prior announcement. The rest is like Silver
			</li>
			<li><b>Platinum</b>Like gold, all with one club.</li>
		</ul>
	</div>

	<div>
		<h2>Modi</h2>

		<main class="cards">
			<Card link="/games/exact/two-players" title="2 Players" />
			<Card link="/games/exact/three-players" title="3 Players" />
			<Card link="/games/exact/four-players" title="4 Players" />
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
