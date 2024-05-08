<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

    function handleCancel(event: { preventDefault: () => void }) {
        event.preventDefault();
        history.back();
    }
</script>

<svelte:head>
	<title>Edit - {data.id}</title>
</svelte:head>

<h1>Edit - {data.title} ({data.id})</h1>

<form method="POST">
	<label for="title">Title</label>
	<input type="text" id="title" name="title" bind:value={data.title} />

	<label for="title">Description</label>
	<textarea bind:value={data.description} id="description" name="description" rows="5" />

	<label for="plan">Plan</label>
	<textarea bind:value={data.plan} id="plan" name="plan" rows="10" />

	<br />

	<button type="submit">Save</button>
    <button type="button" on:click={handleCancel}>Cancel</button>
</form>

<style lang="scss">
	textarea {
		background-color: var(--bg-color);
        color: var(--font-color);
		width: 100%;
	}
</style>
