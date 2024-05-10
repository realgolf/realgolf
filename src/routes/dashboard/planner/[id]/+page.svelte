<script lang="ts">
	export let data;

	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('trainings_plan')} - {data.id}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{data.title} - {data.id}</h1>

	<p class="date">
		{data.dateOfCreation?.toLocaleDateString()} - {data.dateOfLastEdit?.toLocaleDateString()} / {$_(
			'visits',
			{ values: { visits: data.visits } }
		)} / {$_('edits', { values: { edits: data.edits } })}
	</p>

	<div class="description">
		<b>{$_('description')}</b>
		{#if data.description}
			<p>{data.description}</p>
		{:else}
			<p class="error">{$_('no_description')}</p>
		{/if}
	</div>

	<div class="plan">
		<b>{$_('plan')}</b>
		{#if data.plan}
			<pre>{data.plan}</pre>
		{:else}
			<p class="error">{$_('no_plan')}</p>
		{/if}
	</div>

	<div class="utils">
		<a href="/dashboard/planner/{data.id}/edit">
			<button>{$_('edit')}</button>
		</a>
		<form method="POST">
			<button type="submit" class="delete">{$_('delete')}</button>
		</form>
	</div>
{/if}

<style lang="scss">
	@import '$lib/scss/Planner/Planner.scss';
</style>
