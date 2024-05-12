<script lang="ts">
	import type { Todo } from '$lib/types/planner';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	let todos: Todo[] = [];

	function handleCancel(event: { preventDefault: () => void }) {
		event.preventDefault();
		history.back();
	}

	function addTodo(event: { preventDefault: () => void }) {
		event.preventDefault();

		todos = [
			...todos,
			{
				task: '',
				done: false,
				priority: 3
			}
		];
	}
</script>

<svelte:head>
	<title>{$_('edit')} - {data.id}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('edit')} - {data.title} ({data.id})</h1>

	<form method="POST">
		<label for="title">{$_('plan_edit_title')}</label>
		<input type="text" id="title" name="title" bind:value={data.title} />

		<label for="description">{$_('description')}</label>
		<textarea bind:value={data.description} id="description" name="description" rows="2" />

		<label for="comment">{$_('comment')}</label>
		<textarea bind:value={data.comment} id="comment" name="comment" rows="3" />

		<label for="todos">Todos</label>

		<button on:click={addTodo}><Fa icon={faPlus} /></button>

		{#each todos as todo, i}
			<div>
				<div class="checkbox">
					<input type="checkbox" id="done_{i}" name="done_{i}" bind:checked={todo.done} />
					<label for="done_{i}">{$_('done')}</label>
				</div>

				<input type="text" id="task_{i}" name="task_{i}" bind:value={todo.task} />
				<input type="number" id="priority" name="priority_{i}" bind:value={todo.priority} />
			</div>
		{/each}

		<br />

		<button type="submit">{$_('save')}</button>
		<button type="button" on:click={handleCancel}>{$_('cancel')}</button>
	</form>
{/if}

<style lang="scss">
	textarea {
		background-color: var(--bg-color);
		color: var(--font-color);
		width: 100%;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: var(--medium-font);
		padding-left: 0.2rem;
	}

	input[type=checkbox] {
		display: flex;
		flex-direction: row;
		margin-inline: 1rem;
	}

	#priority {
		width: 2rem !important;
	}
</style>
