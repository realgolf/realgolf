<script lang="ts">
	import Info from '$lib/components/Public/Info.svelte';
	import { onMount } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	let hasRedirected = false;

	onMount(() => {
		const correctCasedUrl = `/${data.user_username}`;

		if (data.user_username == undefined) return;
		if (!hasRedirected && window.location.pathname !== correctCasedUrl) {
			window.location.href = correctCasedUrl;
			hasRedirected = true;
		}
	});
</script>

<svelte:head>
	<title>{data.user_username} ({data.user_name})</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else if data.user_username === undefined}
	<section>
		<div>
			<h1>{$_('error')}</h1>
			<pre>404: {$_('user_not_found')}</pre>
			<br />
			<a href="/">{$_('home')}</a>
		</div>
	</section>
{:else}
	<Info {data} />
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
