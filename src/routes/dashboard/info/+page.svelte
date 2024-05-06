<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Real Golf - {$_('info')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('info')}</h1>

	<p use:sanitizeHTML={[$_('info_text')]} />
	
	<p use:sanitizeHTML={[$_('link_to_tools')]} />
{/if}
