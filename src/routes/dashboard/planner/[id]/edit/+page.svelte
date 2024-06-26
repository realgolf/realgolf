<script lang="ts">
	import type { Todo } from '$lib/types/planner';
	import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;

	function handleCancel(event: { preventDefault: () => void }) {
		event.preventDefault();
		history.back();
	}

	let todos: Todo[] = data.todos ?? [];

	function addTodo(event: { preventDefault: () => void }) {
		event.preventDefault();

		todos = [
			...todos,
			{
				id: Math.random().toString(36).slice(2),
				task: '',
				done: false,
				priority: 3
			}
		];
	}

	function deleteTodo(id: string) {
		todos = todos.filter((todo) => todo.id !== id);
	}

	function deleteAllTodos() {
		todos = [];
	}
</script>

<svelte:head>
	<title>{$_('edit')} - {data.id}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('edit')} - {data.title} ({data.id})</h1>

	<form action="?/edit" method="POST" id="update-planner">
		<label for="title">{$_('plan_edit_title')}</label>
		<input type="text" id="title" name="title" bind:value={data.title} />

		<label for="description">{$_('description')}</label>
		<textarea
			bind:value={data.description}
			id="description"
			name="description"
			rows="2"
			title={$_('description')}
		/>

		<label for="comment">{$_('comment')}</label>
		<textarea
			bind:value={data.comment}
			id="comment"
			name="comment"
			rows="3"
			title={$_('comment')}
		/>

		<br />

		<p>{$_('todos')}</p>
		<button title={$_('create_todo')} type="button" on:click|preventDefault={addTodo}
			><Fa icon={faPlus} /></button
		>
		{#if todos.length > 0}
			<button title={$_('delete_all_todos')} type="button" on:click|preventDefault={deleteAllTodos}
				><Fa icon={faTrashAlt} /></button
			>
			<div>
				{#each todos as todo, index (todo.id)}
					<div
						class="todo"
						id="task_{index}"
						animate:flip={{ duration: 200 }}
						in:fly|local={{ x: -50, duration: 200 }}
						out:fly|local={{ x: +50, duration: 200 }}
					>
						<div class="checkbox">
							<input
								type="checkbox"
								id="done_{index}"
								name="done_{index}"
								bind:checked={todo.done}
								class:done={todo.done}
								title={$_('done')}
							/>
						</div>
						<input
							type="text"
							id="task_{index}"
							name="task_{index}"
							bind:value={todo.task}
							placeholder={$_('todo')}
							title={$_('todo')}
						/>
						<input
							type="number"
							id="priority_{index}"
							name="priority_{index}"
							bind:value={todo.priority}
							title={$_('priority')}
						/>
						<input hidden type="text" name="id_{index}" id="id_{index}" bind:value={todo.id} />
						<div class="delete">
							<button
								title={$_('delete_todo')}
								type="button"
								on:click|preventDefault={() => deleteTodo(todo.id)}><Fa icon={faTrashAlt} /></button
							>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<p>{$_('no_todos')}</p>
		{/if}

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

	.todo {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		margin-top: 0.5rem;

		input[type='text'] {
			width: 84%; /* Text input takes up 50% of the flexbox */
			margin-right: 1%;
		}

		input[type='number'] {
			width: 14%; /* Number input takes up 25% of the flexbox */
			margin-right: 1%;
		}

		.checkbox {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 1%;

			.done {
				color: green !important;
			}
		}
	}
</style>
