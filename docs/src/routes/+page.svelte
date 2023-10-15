<script lang="ts">
	import GetStarted from '$lib/components/LandingPage/GetStarted.svelte';
</script>

<svelte:head>
	<title>Golf Games Docs</title>
</svelte:head>

<div class="heading">
	<h1>Golf Games Docs</h1>
	<p class="grey">Help for wherever you are on your Golf Games journey.</p>
</div>

<section>
	<GetStarted />
</section>

<style lang="scss">
	.heading {
		width: 100vw;
		.grey {
			color: grey;
			font-size: 1.5rem;
		}

		border-bottom: 1px solid var(--border-color);
	}

	section {
		margin-top: 1rem;
		margin-inline: 2rem;
	}
</style>
