<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import '$lib/scss/app.scss';
</script>

<svelte:head>
	<link rel="icon" href="/golf.PNG" />
</svelte:head>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		max-width: 40rem;
		/* margin-inline: auto; */
		padding-inline: 1rem;
	}
</style>
