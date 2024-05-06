<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../../routes/[name]/$types';

	export let data: PageData;
</script>

<div class="pronoun">
	<label for="pronouns">{$_("pronouns")}</label>
	<select name="pronoun" id="pronoun" bind:value={data.pronoun}>
		<option value="dont">Don't specify</option>
		<option value="he/him">he/him</option>
		<option value="she/her">she/her</option>
		<option value="they/them">they/them</option>
		<option value="custom">Costum</option>
	</select>
	{#if data.pronoun == 'custom'}
		<input type="text" name="custom_pronoun" id="custom_pronoun" bind:value={data.custom_pronoun} />
	{/if}
</div>

<style lang="scss">
	@import '$lib/scss/Public/Bio.scss';
</style>