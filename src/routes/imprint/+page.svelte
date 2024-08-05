<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('imprint_heading')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('imprint_heading')}</h1>

	<h2>{$_('responsible_according_tmg')}</h2>

	<p translate="no">RealGolf.Games</p>
	<p>c/o Julian Hammer</p>
	<p>Katrepeler Landstraße 59a</p>
	<p>28357 Bremen</p>

	<h2>{$_('contact')}</h2>

	<p>E-Mail: support@realgolf.games</p>

	<h2>{$_('responsible_according_rstv')}</h2>

	<p translate="no">RealGolf.Games</p>
	<p>c/o Julian Hammer</p>
	<p>Katrepeler Landstraße 59a</p>
	<p>28357 Bremen</p>

	<h2>{$_('liability_for_content')}</h2>
	<p>
		{$_('content_for_liability_for_content')}
	</p>

	<p>
		{$_('content_for_liability_for_content_2')}
	</p>

	<h2>{$_('liability_for_links')}</h2>

	<p>
		{$_('content_for_liability_for_links')}
	</p>

	<p>
		{$_('content_for_liability_for_links_2')}
	</p>

	<h2>{$_('copyright_imprint')}</h2>

	<p>
		{$_('content_for_copyright_imprint')}
	</p>

	<p>
		{$_('content_for_copyright_imprint_2')}
	</p>

	<p>Copyright © 2024 RealGolf.Games</p>
	<p>{$_('license')}</p>

	<p>{$_('country')} 04.07.23</p>
{/if}
