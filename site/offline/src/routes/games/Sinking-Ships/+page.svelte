<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Golf Games Offline - Sinking Ships</title>
</svelte:head>

<h1>Sinking Ships</h1>

<main>
	<div>
		<h2>Rules</h2>

		<div>
			<h3>Board:</h3>
			<p>
				Each Player has a board, that is splitted into columns from A to J and in rows from 1 to 10.
				This makes a grid of 10x10 fields.
			</p>
			<h3>Ships:</h3>
			<p>Each Player has a fleet of ships, which are placed on his board.</p>
			<h4>The Ships and sizes are:</h4>
			<div class="margin-left">
				<li>1 Battleship (5 fields)</li>
				<li>1 Cruiser (4 fields)</li>
				<li>2 Destroyers (3 fields each)</li>
				<li>2 Submarines (2 fields each)</li>
				<li>2 patrol boats (1 field each)</li>
			</div>
			<h3>Placement of the Ships:</h3>
			<p>
				The first Player places his Ships first on the Board, while the other Players look away,
				then the second and so on until all Players have placed all their Ships.
			</p>
			<h3>Playing style with more than two Players:</h3>
			<p>
				If more than two Players play the game, each Player can decide who he wants to attack, for
				example if there are the Players "Red", "Blue" and "Green", then "Red" can decide, if he
				wants to attack "Blue" or "Green" first, the Player with spare Ships is winning at the end.
			</p>
			<h3>Special regulation:</h3>
			<p>
				You can agree that a player has another shot after a hit to try to determine the length of
				the hit ship and sink it faster.
			</p>
		</div>
	</div>

	<div>
		<h2>Modi</h2>

		<main class="cards">
			<Card link="/games/Sinking-Ships/two-players" title="Two Players" />
			<!-- <Card link="/games/Sinking-Ships/three-players" title="Three Players" />
			<Card link="/games/Sinking-Ships/four-players" title="Four Players" /> -->
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
