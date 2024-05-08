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

<form action="?/new" method="POST">
	<button>Create a new Planner</button>
</form>

{#if data.planners}
	{#each data.planners as planner}
		<a href="/dashboard/planner/{planner.id}">
			<div>
				<p>{planner.title}</p>
				<p>{planner.id}</p>
			</div>
		</a>
	{/each}
{/if}

{#if form?.body.error}
	<p class="error">{form.status} - {form.body.error}</p>
{/if}
