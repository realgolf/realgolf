<script lang="ts">
	export let display_socials: string;
	import { _ } from 'svelte-i18n';
</script>

<div class="social">
	<label for="socials">{$_("socials_one_per_line")}</label>
	<textarea bind:value={display_socials} name="socials" id="socials" rows="3" />
</div>

<style lang="scss">
	@import '$lib/scss/Public/Bio.scss';
</style>
