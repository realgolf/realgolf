<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../../routes/[name]/$types';

	export let data: PageData;
</script>

<div class="checkbox">
	<label for="email_public">{$_("display_email_public")}</label>
	<input
		type="checkbox"
		name="email_public"
		id="email_public"
		bind:checked={data.user_email_public}
	/>
</div>

<style lang="scss">
	@import '$lib/scss/Public/Bio.scss';
</style>
