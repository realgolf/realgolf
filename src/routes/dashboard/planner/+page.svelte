<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>Real Golf - Trainings Planner</title>
</svelte:head>

<h1>Trainings Planner</h1>

<p>Plan what you want to train on which day, with our Golf Trainings Planner</p>

<form method="POST">
	<button>Create a new Planner</button>
</form>

{#if data.planners}
	{#each data.planners as planner}
		<a href="/dashboard/planner/{planner.id}" class="planner">
			<div>
				<p>{planner.title} - {planner.id}</p>
				<p>{planner.description}</p>
			</div>
		</a>
	{/each}
{/if}

{#if form?.body.error}
	<p class="error">{form.status} - {form.body.error}</p>
{/if}

<style lang="scss">
	.planner {
		display: block;
		padding: 1rem;
		border: 1px solid var(--border-color);
		margin: 1rem 0;
		text-decoration: none;

		&:hover {
			color: var(--font-color);
			box-shadow: 2px 2px 5px var(--shadow-color);
		}
	}
</style>
