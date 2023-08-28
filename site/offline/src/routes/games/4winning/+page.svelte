<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Golf Games Offline - 4 Winning</title>
</svelte:head>

<h1>4 Winning</h1>

<main>
	<div>
		<h2>Rules</h2>

		<p>
			The rules of the game are very simple, it's just a kind of four-in-a-row, you click the button
			which one you hit from the distance. After the first team's turn, the second teams is and
			clicks on a field, regardless of whether it has already been clicked on by another team, then
			it's the turn of the next team, you can see which team it is at the top of the respective game
			recognize. The game continues until one team has four squares in a row or column. If you click
			the same field four times, a message appears telling you that you have clicked the same field
			four times. When a team wins, the values ​of the fields are reset and you can start from the
			beginning. The game automatically switches teams. All of the above information applies to all
			games!
		</p>
	</div>

	<div>
		<h2>Levels</h2>

		<ul class="no-bullets">
			<li><b>Bronze:</b> Only the lenght of the shot applies</li>
			<li><b>Silver:</b> The number of meters and the lateral deviation apply.</li>
			<li>
				<b>Gold:</b> Fields can only be played after prior announcement. Platinum: Like gold, all with
				a club.
			</li>
		</ul>
	</div>

	<div>
		<h2>Modi</h2>

		<main>
			<Card link="/games/4winning/two-players" title="2 Teams" />
			<Card link="/games/4winning/three-players" title="3 Teams" />
			<Card link="/games/4winning/four-players" title="4 Teams" />
		</main>
	</div>
</main>

<style lang="scss">
	main {
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
