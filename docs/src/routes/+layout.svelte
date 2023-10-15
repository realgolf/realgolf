<script lang="ts">
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

<style>
	main {
		width: 100vw;
		padding-inline: 1rem;

		@media screen and (max-width: 767px) {
			margin-bottom: 20px;
		}
	}
</style>
