<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Edit - {data.id}</title>
</svelte:head>

<h1>Edit - {data.title} ({data.id})</h1>

<form action="?/update" method="POST">
	<label for="title">Title</label>
	<input type="text" id="title" name="title" bind:value={data.title} />

	<label for="title">Description</label>
	<textarea bind:value={data.description} id="description" name="description" />

	<label for="plan">Plan</label>
	<textarea bind:value={data.plan} id="plan" name="plan" />

    <br>

	<button type="submit">Save</button>
</form>

<style lang="scss">
    textarea {
        background-color: var(--bg-color);
    }
</style>