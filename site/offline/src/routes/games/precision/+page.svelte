<script>
	import Card from '$lib/components/Card.svelte';
	import GoBack from '$lib/components/GoBack.svelte';
</script>

<svelte:head>
	<title>Golf Games Offline - Precision</title>
</svelte:head>

<GoBack />

<h1>Precision</h1>

<main>
	<div>
		<h2>Rules</h2>

		<p>
			The aim of this golf game "Precision" is to retain as many points as possible out of the
			initial 100 points by executing precise shots. For each shot, the deviation of the ball from
			the target distance is measured.
			<br />
			<br />
			Precision is measured by the deviation in meters from the target distance. The closer the ball
			is to the specified distance, the fewer points will be deducted. It follows a deduction of 1 point
			per meter deviation from the target.
			<br />
			<br />
			At the end of the game, the player who has retained the highest score out of the initial 100 points
			is declared the winner. This means that the individual with the highest score due to deductions
			emerges as the victor! Fairness and respect towards other players are paramount. Be sure to adhere
			to the rules and etiquette of the game, as well as the guidelines of the club.
			<br />
			<br />
			You can make the game more interesting by introducing additional challenges, such as playing in
			different weather conditions or on various terrains. Whether you are a novice or an experienced
			golfer, "Precision" offers an exciting opportunity to demonstrate your skills and precision. Enjoy
			the game and the company of your fellow players!
			<br />
			<br />
			Are you ready to perfect your golf swings and retain as many points as possible? Let's play "Precision"
			and find out who achieves the highest score at the end!
		</p>
	</div>

	<div>
		<h2>Modi</h2>

		<main class="cards">
			<Card link="/games/precision/one-player" title="One Player" />
			<Card link="/games/precision/two-players" title="Two Players" />
			<Card link="/games/precision/three-players" title="Three Players" />
			<Card link="/games/precision/four-players" title="Four Players" />
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
