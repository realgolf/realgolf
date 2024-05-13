<script lang="ts">
	import type { Todo } from '$lib/types/planner.js';
	import { faStar } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';

	export let data;
	let href = `/${data.username}/planner/${data.id}/stargazers`;

	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';

	function starPlan() {
		const form = document.querySelector('form') as HTMLFormElement;

		console.log(form);

		form.submit();
	}

	// Define sorting options
	const sortingOptions = [
		{ label: 'Priority ↑', value: 'priority-asc' },
		{ label: 'Priority ↓', value: 'priority-desc' },
		{ label: 'Status ↑', value: 'status-asc' },
		{ label: 'Status ↓', value: 'status-desc' }
	];

	// Selected sorting option
	let selectedSortingOption = sortingOptions[0];

	// Sorted todos
	let sortedTodos: Todo[] = [];

	// Function to sort todos based on selected option
	function sortTodos() {
		sortedTodos = [...(data.todos as Todo[])].sort((a, b) => {
			const [field, order] = selectedSortingOption.value.split('-');
			let result = 0;

			switch (field) {
				case 'priority':
					result = a.priority - b.priority;
					break;
				case 'status':
					result = a.done === b.done ? 0 : a.done ? 1 : -1;
					break;
				default:
					break;
			}

			// Reverse the order if descending
			if (order === 'desc') {
				result *= -1;
			}

			return result;
		});
	}

	// Sort todos on component mount and whenever selectedSortingOption changes
	onMount(sortTodos);
	$: sortTodos();
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
		)} / {@html $_('stars', { values: { stars: data.stars, href } })} / {$_('edits', {
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

	{#if sortedTodos && sortedTodos.length > 0}
		<div class="todos">
			<b>{$_('todos')}</b>
			<!-- UI to select sorting option -->
			<br />
			<select bind:value={selectedSortingOption} on:change={sortTodos} class="sort">
				{#each sortingOptions as option}
					<option value={option}>{option.label}</option>
				{/each}
			</select>
			{#each sortedTodos as todo, index}
				<div class="todo" id="task_{index}">
					<div class="checkbox">
						<input
							type="checkbox"
							id="done_{index}"
							name="done_{index}"
							disabled
							bind:checked={todo.done}
							class:done={todo.done}
						/>
					</div>
					<input
						type="text"
						id="task_{index}"
						name="task_{index}"
						disabled
						bind:value={todo.task}
					/>
					<input
						type="number"
						id="priority_{index}"
						name="priority_{index}"
						disabled
						bind:value={todo.priority}
					/>
				</div>
			{/each}
		</div>
	{/if}

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
</style>
