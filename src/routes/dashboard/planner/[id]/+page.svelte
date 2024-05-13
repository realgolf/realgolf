<script lang="ts">
	export let data;
	let href = `/dashboard/planner/${data.id}/stargazers`;

	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('trainings_plan')} - {data.id}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1 class:done={data.done == true}>{data.title} - {data.id}</h1>

	<p class="date">
		{data.dateOfCreation?.toLocaleDateString()} - {data.dateOfLastEdit?.toLocaleDateString()} / {$_(
			'visits',
			{ values: { visits: data.visits } }
			// eslint-disable-next-line svelte/no-at-html-tags
		)} / {@html $_('stars', { values: { stars: data.stars, href } })} / {$_('edits', {
			values: { edits: data.edits }
		})}
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

	{#if data.todos && data.todos.length > 0}
		<div class="todos">
			<b>{$_('todos')}</b>
			{#each data.todos as todo, index}
				<div class="todo" id="task_{index}">
					<div class="checkbox">
						<input type="checkbox" id="done_{index}" name="done_{index}" bind:checked={todo.done} />
					</div>
					<input type="text" id="task_{index}" name="task_{index}" bind:value={todo.task} />
					<input
						type="number"
						id="priority_{index}"
						name="priority_{index}"
						bind:value={todo.priority}
					/>
				</div>
			{/each}
		</div>
	{/if}

	<div class="utils">
		{#if data.done == false}
			<a href="/dashboard/planner/{data.id}/edit">
				<button>{$_('edit')}</button>
			</a>
		{/if}
		<form action="?/done" method="POST">
			<button type="submit" class="done">Done</button>
		</form>
		<form action="?/delete" method="POST">
			<button type="submit" class="delete">{$_('delete')}</button>
		</form>
	</div>
{/if}

<style lang="scss">
	@import '$lib/scss/Planner/Planner.scss';
</style>
