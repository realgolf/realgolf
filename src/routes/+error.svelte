<script lang="ts">
	import { page } from '$app/stores';
	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$page.status} - {$page?.error?.message}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<section>
		<div>
			<h1>{$page.status} - Error</h1>
			<pre>{$page?.error?.message}</pre>
			<p>{$_('contact_support_think_error')}</p>
			<br />
			<a href="/">Home</a>
		</div>
	</section>
{/if}

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
