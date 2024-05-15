<script lang="ts">
	import { addCommas } from '$lib/scripts/Planner/addCommas';
	import { starPlan } from '$lib/scripts/Planner/starPlanner';
	import { faStar } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _ } from 'svelte-i18n';

	export let data;
	export let href: string;
</script>

<p class="date">
	{data.dateOfCreation?.toLocaleDateString()} - {data.dateOfLastEdit?.toLocaleDateString()}
</p>

<div class="stats">
	{#if addCommas(data.visits) !== undefined}
		{$_('visits', { values: { visits: addCommas(data.visits) } })}
	{:else}
		{$_('visits', { values: { visits: data.visits } })}
	{/if}
	<!--eslint-disable-next-line-->
	/ {@html $_('stars', { values: { stars: data.stars, href } })} /
	{#if addCommas(data.edits) !== undefined}
		{$_('edits', { values: { edits: addCommas(data.edits) } })}
	{:else}
		{$_('edits', { values: { edits: data.edits } })}
	{/if}
</div>

<div class="utils">
	<button on:click={starPlan} class:starred={data.person_has_starred}
		><Fa icon={faStar} />
		{#if data.person_has_starred}
			{$_('starred_planner')}
		{:else}
			{$_('star_a_planner')}
		{/if}</button
	>
</div>

<style lang="scss">
	@import '$lib/scss/Planner/Utils.scss';
</style>
