<script lang="ts">
	import { faEye, faStar } from '@fortawesome/free-regular-svg-icons';
	import { faPen } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import Error from '../Error.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.username} - {$_('trainings_planner')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else if data.username === undefined || data.deleted}
	<Error />
{:else}
	<h1>{data.username}`s {$_('trainings_planner')}</h1>

	{#if data.planners}
		{#each data.planners as planner}
			<a href="/{data.username}/planner/{planner.id}" class="planner">
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
{/if}

<style lang="scss">
	@import '$lib/scss/Planner/Planners.scss';

	.done {
		color: green !important;
	}
</style>
