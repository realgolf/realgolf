<script lang="ts">
	import Account from '$lib/components/Settings/Account.svelte';
	import DeleteAccount from '$lib/components/Settings/DeleteAccount.svelte';
	import Handicap from '$lib/components/Settings/Handicap.svelte';
	import Logout from '$lib/components/Settings/Logout.svelte';
	import Measurement from '$lib/components/Settings/Measurement.svelte';
	import Preference from '$lib/components/Settings/Preference.svelte';
	import { _, isLoading } from 'svelte-i18n';

	export let form;
	export let data;
</script>

<svelte:head>
	<title>Real Golf - {$_('settings')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('settings')}</h1>

	{#if form?.message}
		<p class="success">
			{form.message}
		</p>
	{/if}

	{#if form?.error}
		<p class="error">
			{form.error}
		</p>
	{/if}

	<Account {data} />

	<Handicap {data} />

	<Measurement {data} />

	<Preference {data} />

	<DeleteAccount />

	<Logout />
{/if}

<style lang="scss">
	@import '$lib/scss/Settings/main.scss';
</style>
