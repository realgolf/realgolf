<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - {$page?.error?.message}</title>
</svelte:head>

<section>
	<div>
		<h1>Error</h1>
		<pre>{$page.status}: {$page?.error?.message}</pre>
		<br />
		<a href="/">Home</a>
	</div>
</section>

<style lang="scss">
	section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		div {
			text-align: left;
			line-height: 1rem !important;
		}
	}

	h1 {
		padding-block: 1rem;
		color: yellow;
	}

	pre {
		color: yellow;
	}
</style>
