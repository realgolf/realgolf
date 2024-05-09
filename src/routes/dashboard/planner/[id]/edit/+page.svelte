<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	function handleCancel(event: { preventDefault: () => void }) {
		event.preventDefault();
		history.back();
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
		<label for="title">{$_("plan_edit_title")}</label>
		<input type="text" id="title" name="title" bind:value={data.title} />

		<label for="title">{$_("description")}</label>
		<textarea bind:value={data.description} id="description" name="description" rows="5" />

		<label for="plan">{$_("plan")}</label>
		<textarea bind:value={data.plan} id="plan" name="plan" rows="10" />

		<br />

		<button type="submit">{$_("save")}</button>
		<button type="button" on:click={handleCancel}>{$_("cancel")}</button>
	</form>
{/if}

<style lang="scss">
	textarea {
		background-color: var(--bg-color);
		color: var(--font-color);
		width: 100%;
	}
</style>
