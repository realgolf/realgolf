<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../../../routes/[name]/$types';
	import EmojiPicker from './EmojiPicker.svelte';

	let HTMLInputElement: HTMLInputElement;

	onMount(() => {
		HTMLInputElement = document.getElementById('status_emoji') as HTMLInputElement;
	});

	export let data: PageData;
</script>

<div class="status">
	<label for="status_input">{$_('edit_status')}</label>
	<input type="text" name="status_text" id="status_text" bind:value={data.user_status.text} />
	<input type="text" name="status_emoji" id="status_emoji" bind:value={data.user_status.emoji} />
	{#if HTMLInputElement}
		<div class="emoji-picker">
			<EmojiPicker bind:HTMLInputElement />
		</div>
	{/if}
	<div class="checkbox busy">
		<label for="busy">{$_('busy')}</label>
		<input type="checkbox" name="busy" id="busy" bind:checked={data.user_status.busy} />
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/Public/Bio.scss';
</style>
