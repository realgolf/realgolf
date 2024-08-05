<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('tools')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('tools')}</h1>

	<p class="success">
		{$_('tools_description')}
	</p>

	<ol class="no-bullets">
		<li>Trackman</li>
		<li>Arccos Smart Sensors</li>
		<li>Garmin Apprach R10</li>
		<li>{$_('any_simulator')}</li>
	</ol>
{/if}
