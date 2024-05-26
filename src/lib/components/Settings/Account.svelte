<script lang="ts">
	import { faEye } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _ } from 'svelte-i18n';

	export let data;
	let show_copy_info = false;

	function copy_to_clipboard(id: string) {
		if (window) {
			window.navigator.clipboard.writeText(id);
			show_copy_info = true;
			setTimeout(() => {
				show_copy_info = false;
			}, 3000);
		}
	}
</script>

{#if show_copy_info}
	<p class="success">{$_('id_copy_success')}</p>
{/if}

<div id="account">
	<h2>{$_('account')}</h2>

	<div class="id">
		<p>{$_('your_id')}: {data.id}</p>
		<button on:click={() => copy_to_clipboard(data.id)} class="user_id">{$_('copy_id')}</button>
		<p>
			{$_('your_id_info')}
		</p>
	</div>

	<form action="?/name" method="POST" autocomplete="off" class="update-form">
		<div>
			<label for="name_input">{$_('name')}</label>
			<input type="text" id="name_input" name="name" value={data.name} />
		</div>
		<button aria-label="update name">{$_('update')}</button>
	</form>

	<form action="?/email" method="POST" autocomplete="off" class="update-form">
		<div>
			<label for="email_input">{$_('email')}</label>
			<input type="email" id="email_input" name="email" value={data.email} />
		</div>
		<button aria-label="update email">{$_('update')}</button>
	</form>

	<form action="?/password" method="POST" autocomplete="off" class="update-form">
		<div>
			<label for="password_input">{$_('password')}</label>
			<div>
				<label for="current_password_input">{$_('current_password')}</label>
				<input type="password" id="current_password_input" name="current_password" value="" />
			</div>
			<div>
				<label for="new_password_input">{$_('new_password')}</label>
				<input type="password" id="new_password_input" name="new_password" value="" />
			</div>
			<div>
				<label for="confirm_password_input">{$_('verify_password')}</label>
				<input type="password" id="confirm_password_input" name="confirm_password" value="" />
			</div>
		</div>

		<div>
			<button
				id="toggle_password"
				type="button"
				aria-label="Toggle between password visible and pasword hidden"
				><Fa id="eye_icon" icon={faEye} /></button
			>
			<button aria-label="update password">{$_('update')}</button>
		</div>
	</form>
</div>

<style lang="scss">
	.user_id {
		margin: 1rem 0;
	}
</style>