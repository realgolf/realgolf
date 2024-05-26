<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	export let data;

	// eslint-disable-next-line
	let handicap_history: any[] | undefined = [];

	onMount(() => {
		handicap_history = data.handicap_history;
	});
</script>

<div class="handicap">
	<h2>{$_('handicap')}</h2>
	<p class="success">
		{$_('what_is_the_handicap')}
	</p>
	<p class="underline">{$_('current_handicap')}: {data.handicap}</p>
	<p class="underline">
		{$_('handicap_last_updated', {
			values: { lastUpdateDate: data.handicap_updated.toLocaleString() }
		})}
	</p>
	<p>
		{$_('when_handicap_changed')}
	</p>

	<div id="update-handicap">
		<form action="?/handicap" method="POST" class="handicap-form">
			<label for="handicap">{$_('enter_new_handicap')}</label>
			<input type="string" name="handicap" id="handicap" bind:value={data.handicap} />
			<button class="update" aria-label="Update Handicap">{$_('update')}</button>
		</form>
	</div>

	{#if handicap_history && handicap_history.length > 0}
		<div class="handicap_history">
			<details>
				<summary>{$_('handicap_hstory')}</summary>
				{#each handicap_history.slice().reverse() as handicap}
					<div>
						<p>{$_('handicap')}: {handicap.handicap}</p>
						<p>{$_('updated_at_the')}: {new Date(handicap.date).toLocaleString()}</p>
					</div>
				{/each}
				<form action="?/clear_handicap_history" method="POST">
					<button>{$_('clear_history')}</button>
				</form>
			</details>
		</div>
	{/if}
</div>

<style lang="scss">
	@import "$lib/scss/Settings/update.scss";
</style>