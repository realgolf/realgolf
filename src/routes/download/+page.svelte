<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Real Golf - {$_("download")}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_("download")}</h1>
	
	<p>{$_("download_description")}</p>
	
	<h2>Safari (iOS)</h2>
	<p>{$_("installation_steps_for_safari")}:</p>
	<ol>
		<li>{$_("instalation_safari_step_1")}</li>
		<li>{$_("instalation_safari_step_2")}</li>
		<li>{$_("instalation_safari_step_3")}</li>
	</ol>
	
	<h2>Chrome (Android)</h2>
	<p>{$_("installation_steps_for_chrome")}:</p>
	<ol>
		<li>{$_("instalation_chrome_step_1")}</li>
		<li>{$_("instalation_chrome_step_2")}</li>
		<li>{$_("instalation_chrome_step_3")}</li>
	</ol>
{/if}

<style lang="scss">
	ol {
		margin-left: 2rem;
	}
</style>
