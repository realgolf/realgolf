<script lang="ts">
	import { faStar } from '@fortawesome/free-solid-svg-icons';

	export let data;
	let href = `/${data.username}/planner/${data.id}/stargazers`;

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
		<h1 class:done={data.done == true}>{data.title} - {data.id}</h1>
	</div>

	<p class="date">
		{data.dateOfCreation?.toLocaleDateString()} - {data.dateOfLastEdit?.toLocaleDateString()} / {$_(
			'visits',
			{ values: { visits: data.visits } }
			// eslint-disable-next-line svelte/no-at-html-tags
		)} / {@html ($_('stars', { values: { stars: data.stars, href } }))} / {$_('edits', {
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

	<div class="comment">
		<b>{$_('comment')}</b>
		{#if data.comment}
			<pre>{data.comment}</pre>
		{:else}
			<p class="error">{$_('no_comment')}</p>
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

		a {
			text-decoration: none !important;
		}

		.starred {
			color: yellow !important;

			svg {
				fill: yellow !important;
			}
		}
	}

	.done {
		color: green !important;
	}
</style>
