<script lang="ts">
	import Info from '$lib/components/Public/Info.svelte';
	import { onMount } from 'svelte';
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

<Info {data} />
