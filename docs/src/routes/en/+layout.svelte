<script lang="ts">
	import LoadProgress from '$lib/components/LoadProgress.svelte';
	import ScrollUp from '$lib/components/ScrollUp.svelte';
	import Footer from '$lib/components/en/Footer.svelte';
	import Nav from '$lib/components/en/Nav.svelte';
	import '$lib/scss/app.scss';
</script>

<svelte:head>
	<link rel="icon" href="/golf.PNG" />
</svelte:head>

<LoadProgress />
<ScrollUp />
<Nav />

<div class="wrapper">
	<main>
		<slot />
	</main>
</div>

<Footer />

<style>
	.wrapper {
		max-width: 80rem;
		margin-inline: auto;
		padding-inline: 1rem;
	}

	main {
		padding-block: 1rem 2rem;
	}
</style>
