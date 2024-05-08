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

<p>Description</p>
<div class="description">
	{#if data.description}
		<p>{data.description}</p>
	{:else}
		<p class="error">No description available</p>
	{/if}
</div>

<p>Plan</p>
<div class="plan">
	{#if data.plan}
		<p>{data.plan}</p>
	{:else}
		<p class="error">No plan available</p>
	{/if}
</div>

<a href="/dashboard/planner/{data.id}/edit">
	<button>Edit</button>
</a>

<style lang="scss">
	.date {
		font-size: 0.8em;
		color: #666;
	}
</style>
