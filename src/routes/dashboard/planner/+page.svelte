<script lang="ts">
	import type { ActionData } from "./$types";


	
    // export let data: PageData;
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

{#if form?.body.error}
     <p class="error">{form.status} - {form.body.error}</p>
{/if}