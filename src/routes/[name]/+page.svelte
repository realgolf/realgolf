<script lang="ts">
	import Info from '$lib/components/Public/Info.svelte';
	import { onMount } from 'svelte';
	import { isLoading } from 'svelte-i18n';
	import type { PageData } from './$types';
	import Error from './Error.svelte';

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
	{#if data.user_username === undefined || data.deleted}
		<title>Error - 404</title>
	{:else}
		<title>{data.user_username} ({data.user_name})</title>
	{/if}
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else if data.user_username === undefined || data.deleted}
	<Error />
{:else}
	<Info {data} />
{/if}
