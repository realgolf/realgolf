<script lang="ts">
	import GoBack from '$lib/components/GoBack.svelte';
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML.js';

	export let data;
</script>

<svelte:head>
	<title>{data.rule.title}</title>
</svelte:head>

<main>
	<GoBack />
	{#if data.rule}
		<h1>{data.rule.title}</h1>
		<details class="toc" open>
			<summary>In dieser Regel</summary>

			{#if data.rule.toc && data.rule.toc.h2}
				<ol>
					{#each data.rule.toc.h2 as h2}
						<li>
							<a tabindex="-1" href={`#${h2.id}`}>{h2.text}</a>
							{#if h2.h3}
								<ol>
									{#each h2.h3 as h3}
										<li>
											<a tabindex="-1" href={`#${h3.id}`}>{h3.text}</a>
										</li>
									{/each}
								</ol>
							{/if}
						</li>
					{/each}
				</ol>
			{/if}
		</details>
		<article use:sanitizeHTML={[data.rule.content]}></article>
	{/if}
</main>

<style lang="scss">
	main {
		width: 80vw;
		margin: 0 auto;

		.toc {
			margin-top: 1rem;
			margin-bottom: 1rem;

			ol {
				margin-top: 0.5rem;
			}
		}

		:is(ol, ul):not(.no-bullets) {
			margin-left: 2rem;
		}

		:is(ol, ul):not(.no-bullets) li + li {
			margin-block: 0.5rem;
		}

		:is(ol, ul).no-bullets {
			list-style-type: none;
		}

		article {
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
				border-radius: 0.4rem;
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
				border-radius: 0.2rem;
				font-size: var(--small-font);
				white-space: nowrap;
			}

			:global(strong > em) {
				color: red;
			}

			:global(strong em) {
				text-decoration: none;
			}

			:global(em) {
				text-decoration: underline;
			}

			:global(table) {
				border: 2px solid var(--font-color);
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

			:global(h3) {
				color: var(--accent-color);
			}
		}
	}
</style>
