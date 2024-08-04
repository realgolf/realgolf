<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Error - 404</title>
</svelte:head>

<section>
	<div>
		<h1>Error</h1>
		<pre>404: Page / User not Found</pre>
		<br />
		<a href="/">{$_('home')}</a>
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
