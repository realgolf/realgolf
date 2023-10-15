<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import LoadProgress from '$lib/components/LoadProgress.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ScrollUp from '$lib/components/ScrollUp.svelte';
	import '$lib/scss/app.scss';
</script>

<svelte:head>
	<link rel="icon" href="/golf.PNG" />
</svelte:head>

<LoadProgress />
<ScrollUp />

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		width: 80em;
		margin-inline: auto;
		padding-inline: 1rem;

		@media screen and (max-width: 767px) {
			margin-bottom: 20px;
		}
	}
</style>
