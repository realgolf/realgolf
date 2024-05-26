<script lang="ts">
    import { capitalizeFirstLetter } from '$lib/shared/utils/capitalizeFirstLetter';
    import { _ } from 'svelte-i18n';

    export let data;
</script>

<div id="preferences">
	<h2>{$_('appearance')}</h2>
	<p class="underline">
		{$_('current_theme')}: {capitalizeFirstLetter(data.theme)}
	</p>
	<form action="?/theme" method="POST" class="theme-form">
		<label for="theme-settings">{$_('select_your_theme')}:</label>
		<select id="theme-settings" name="theme-settings" bind:value={data.theme}>
			<option value="dark">{$_('dark')}</option>
			<option value="light">{$_('light')}</option>
			<option value="system">{$_('system')}</option>
		</select>
		<br />
		<button aria-label="update Theme">{$_('update')}</button>
	</form>

	<h2>{$_('rounded_corners')}</h2>
	<p class="underline">
		{$_('current_rounded_corner')}: {JSON.stringify(data.rounded_corners)}
	</p>
	<form action="?/rounded_corners" method="POST" class="rounded-corners-form">
		<div class="same-row">
			<label for="rounded-corners">{$_('select_prefered_rounded_corners')}:</label>
			<input
				type="checkbox"
				name="rounded-corners"
				id="rounded-corners"
				bind:checked={data.rounded_corners}
			/>
		</div>
		<br />
		<button aria-label="update Rounded Corners">{$_('update')}</button>
	</form>

	<h2>{$_('animations')}</h2>
	<p class="underline">
		{$_('current_animation_setting')}: {JSON.stringify(data.animation)}
	</p>
	<form action="?/animation" method="POST" class="animation-form">
		<div class="same-row">
			<label for="animation">{$_('select_prefered_animation_setting')}:</label>
			<input type="checkbox" name="animation" id="animation" bind:checked={data.animation} />
		</div>
		<br />
		<button aria-label="update Animation">{$_('update')}</button>
	</form>
</div>
