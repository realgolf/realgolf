<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';

	export let data;
	let measurement_unit = data.measurement_unit;
</script>

<svelte:head>
	<title>Real Golf - {$_('levels')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('levels')}</h1>

	<main>
		<p class="success">{$_('play_with_levels')}</p>
		<p class="success">{$_('read_carefully')}</p>

		<details>
			<summary>{$_('toc')}</summary>
			<ul class="no-bullets">
				<li><a href="#4-winning">{$_("4_winning")}</a></li>
				<li><a href="#exact">{$_("exact")}</a></li>
			</ul>
		</details>

		<h2 id="4-winning">{$_("4_winning")}</h2>

		<ol class="no-bullets">
			<li><b>{$_('bronze')}:</b> {$_('level_bronze')}</li>
			<li>
				<b>{$_('silver')}:</b>
				{$_('level_silver', { values: { measurement_unit: measurement_unit } })}
			</li>
			<li><b>{$_('gold')}:</b> {$_("level_gold")}</li>
			<li><b>{$_('platinum')}:</b> {$_("level_platinum")}</li>
		</ol>

		<h2 id="exact">{$_("exact")}</h2>

		<ol class="no-bullets">
			<li><b>{$_('bronze')}:</b> {$_("level_bronze")}</li>
			<li>
				<b>{$_('silver')}:</b> {$_('level_silver', { values: { measurement_unit: measurement_unit } })} - {$_('level_silver_exact')}
			</li>
			<li>
				<b>{$_('gold')}:</b> {$_("level_gold")}
			</li>
			<li><b>{$_('platinum')}:</b> {$_("level_platinum")}</li>
		</ol>
	</main>
{/if}
