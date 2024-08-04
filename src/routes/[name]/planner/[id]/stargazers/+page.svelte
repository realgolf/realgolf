<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
	import Error from '../../../Error.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Stargazers · {data.title}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else if data.username === undefined || data.deleted}
	<Error />
{:else}
	<h1>Stargazers</h1>
	<div class="stargazers">
		{#if data.stargazers && data.stargazers.length > 0}
			{#each data.stargazers as stargazer}
				<div class="stargazer">
					<a href="/{stargazer.username}">
						{stargazer.username}
					</a>
				</div>
			{/each}
		{:else}
			<p>{$_('planner_has_no_stars')}</p>
		{/if}
	</div>
{/if}

<style lang="scss">
	.stargazers {
		max-width: 100% !important;
		margin: 0 auto;
		margin-left: 2vw;
		padding: 0 2rem;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 1rem;

		justify-content: space-between;

		.stargazer {
			border-bottom: 2px solid var(--border-color);
			padding: 0 1rem;
			margin-bottom: 1rem;

			a {
				text-decoration: none !important;
				text-align: center;
				color: #4493f8 !important;
				font-weight: bold !important;

				&:hover {
					text-decoration: underline !important;
				}
			}
		}
	}
</style>
