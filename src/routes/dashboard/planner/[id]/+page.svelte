<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Trainings Plan - {data.id}</title>
</svelte:head>

<h1>{data.title} - {data.id}</h1>

<p class="date">
	{data.dateOfCreation?.toLocaleDateString()} - {data.dateOfLastEdit?.toLocaleDateString()}
</p>

<div class="description">
	<b>Description</b>
	{#if data.description}
		<p>{data.description}</p>
	{:else}
		<p class="error">No description available</p>
	{/if}
</div>

<div class="plan">
	<b>Plan</b>
	{#if data.plan}
		<pre>{data.plan}</pre>
	{:else}
		<p class="error">No plan available</p>
	{/if}
</div>

<div class="utils">
	<a href="/dashboard/planner/{data.id}/edit">
		<button>Edit</button>
	</a>
	<form method="POST">
		<button type="submit" class="delete">Delete</button>
	</form>
</div>

<style lang="scss">
	.date {
		font-size: 0.8em;
		color: #666;
	}

	.plan {
		pre {
			margin-left: 1rem;
		}
	}

	.utils {
		display: flex;
		flex-direction: row;
		margin-top: 1rem;

		a {
			margin-right: 1rem;
		}

		.delete {
			color: red !important;
		}
	}
</style>
