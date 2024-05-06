<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
	import type { PageData } from './$types';
	export let data: PageData;

	let user_name = data.name;
	let handicap = data.handicap;
</script>

<svelte:head>
	<title>{$_("score_tracker")}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_("score_tracker")}</h1>

	<main>
	<div class="heading">
		<p>
			{$_('welcome_to_course_tracker', { values: { user_name, handicap } })}
		</p>

		<a href="/dashboard/courses/play">{$_("play")}</a>
	</div>
</main>

	<main>
		<h4>{$_('welcome_to_course_tracker', { values: { user_name } })}</h4>
		<p class="error">{$_("site_under_development")}</p>
		<a href="/dashboard"><b>{$_("back_to_dashboard")}</b></a>
	</main>
{/if}
