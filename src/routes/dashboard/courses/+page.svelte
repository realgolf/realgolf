<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { _, isLoading } from 'svelte-i18n';
	export let data: any;

	let user_name = data.name;
	let handicap = data.handicap;
</script>

<svelte:head>
	<title>{$_('score_tracker')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('score_tracker')}</h1>

	<main>
		<div class="heading">
			<p
				use:sanitizeHTML={[
					$_('welcome_to_course_tracker', { values: { user_name: user_name, handicap: handicap } })
				]}
			></p>

			<!-- <a href="/dashboard/courses/play">{$_('play')}</a> -->
		</div>
	</main>

	<main>
		<p class="error">{$_('site_under_development')}</p>
		<a href="/dashboard"><b>{$_('back_to_dashboard')}</b></a>
	</main>
{/if}
