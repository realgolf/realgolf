<script>
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Golf Games Offline - Games</title>
</svelte:head>

<h1>Games</h1>

<main>
	<Card link="/games/4winning" title="4 Winning" />
	<Card link="/games/exact" title="Exact" />
	<Card link="/games/precision" title="Precision" />
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
