<script lang="ts">
	import GoBack from '$lib/components/GoBack.svelte';
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML.js';

	export let data;
</script>

<svelte:head>
	<title>{data.blog.title}</title>
</svelte:head>

<GoBack />

<main>
	<h1>{data.blog.title}</h1>

	<div class="dates">
		<div>Published: {new Date(data.blog.published).toLocaleDateString()}</div>
		{#if data.blog.updated}
			<div>Updated: {new Date(data.blog.updated).toLocaleDateString()}</div>
		{/if}
	</div>

	<article use:sanitizeHTML={[data.blog.content]}></article>
</main>

<style lang="scss">
	main {
		margin-left: 1rem;
	}

	.dates {
		margin-top: -0.5rem;
		font-size: var(--small-font);
		color: #999;
	}

	article {
		margin-top: 1rem;

		:global(h2) {
			padding-top: 5rem;
			margin-top: -3.5rem;
		}

		:global(blockquote) {
			margin-block: 1rem;
			margin-left: 1rem;
			padding-left: 0.5rem;
			color: var(--secondary-font-color);
			font-size: var(--small-font);
			border-left: 0.2rem solid var(--border-color);
			line-height: 1.6;
		}

		:global(pre) {
			border-radius: var(--border-radius);
			font-size: var(--small-font);
			padding: 1rem;
			margin-block: 1rem;
			overflow: auto;
			max-height: 30rem;
			border: 0.15rem solid var(--code-border-color);
			background-color: var(--code-bg-color);
			tab-size: 4;

			scrollbar-width: thin;
			&::-webkit-scrollbar {
				width: 0.4rem;
				height: 0.4rem;
			}
			&::-webkit-scrollbar-thumb {
				background-color: var(--secondary-font-color);
			}
		}

		:global(code:not(pre code)) {
			font-family: monospace;
			background-color: var(--inline-code-bg-color);
			padding-inline: 0.5rem;
			padding-block: 0.05rem;
			border-radius: var(--border-radius);
			font-size: var(--small-font);
			white-space: nowrap;
		}

		:global(ol) {
			margin-left: 2rem;
			margin-top: 1rem;
			margin-bottom: 1rem;
		}

		:global(ul) {
			margin-left: 2rem;
			margin-top: 1rem;
			margin-bottom: 1rem;
		}
	}
</style>
