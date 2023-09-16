<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';
	import '$lib/css/app.css';
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
