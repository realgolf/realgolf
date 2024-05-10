<script lang="ts">
	import { faStar } from '@fortawesome/free-solid-svg-icons';

	export let data;

	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';

	function starPlan() {
		const form = document.querySelector('form') as HTMLFormElement;

		console.log(form);

		form.submit();
	}
</script>

<svelte:head>
	<title>{data.username}`s {$_('trainings_plan')} - {data.id}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<div class="header">
		<h1>{data.title} - {data.id}</h1>
		<div class="utils" />
	</div>

	<p class="date">
		{data.dateOfCreation?.toLocaleDateString()} - {data.dateOfLastEdit?.toLocaleDateString()} / {$_(
			'visits',
			{ values: { visits: data.visits } }
		)} / {$_('stars', { values: { stars: data.stars } })} / {$_('edits', {
			values: { edits: data.edits }
		})}
		<button on:click={starPlan} class:starred={data.visitor_has_starred}
			><Fa icon={faStar} /></button
		>
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

	<form action="" method="POST" style="display: none;">
		<input type="text" name="star" id="star" value="star" />
	</form>
{/if}

<style lang="scss">
	@import '$lib/scss/Planner/Planner.scss';

	.date {
		button {
			margin-left: 1rem;
			box-shadow: none;
		}

		.starred {
			color: yellow !important;

			svg {
				fill: yellow !important;
			}
		}
	}
</style>
