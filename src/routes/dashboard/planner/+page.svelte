<script lang="ts">
	import { faEye, faStar } from '@fortawesome/free-regular-svg-icons';
	import { faPen } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('trainings_planner')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('trainings_planner')}</h1>

	<p>{$_('trainings_planner_description')}</p>

	<form method="POST">
		<button>{$_('create_new_planner')}</button>
	</form>

	{#if data.planners}
		{#each data.planners as planner}
			<a href="/dashboard/planner/{planner.id}" class="planner">
				<div>
					<p class:done={planner.done == true}>{planner.title} - {planner.id}</p>
					<p>{planner.description}</p>
					<div class="stats">
						<p>
							{planner.stars.count}
							<Fa icon={faStar} /> - {planner.visits}
							<Fa icon={faEye} /> - {planner.edits}
							<Fa icon={faPen} />
						</p>
					</div>
				</div>
			</a>
		{/each}
	{/if}

	{#if form?.body.error}
		<p class="error">{form.status} - {form.body.error}</p>
	{/if}
{/if}

<style lang="scss">
	@import '$lib/scss/Planner/Planners.scss';

	.done {
		color: green !important;
	}
</style>
