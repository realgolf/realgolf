<script lang="ts">
	import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';
	import { _ } from 'svelte-i18n';

	export let data;
	let show_copy_info = false;
	let eye_icon = faEye;

	function copy_to_clipboard(id: string) {
		if (window) {
			window.navigator.clipboard.writeText(id);
			show_copy_info = true;
			setTimeout(() => {
				show_copy_info = false;
			}, 3000);
		}
	}

	function togglePassword() {
		const currentPasswordInput = document.getElementById(
			'current_password_input'
		) as HTMLInputElement;
		const newPasswordInput = document.getElementById('new_password_input') as HTMLInputElement;
		const confirmPasswordInput = document.getElementById(
			'confirm_password_input'
		) as HTMLInputElement;

		if (currentPasswordInput.type === 'password') {
			currentPasswordInput.type = 'text';
			newPasswordInput.type = 'text';
			confirmPasswordInput.type = 'text';
			eye_icon = faEyeSlash;
		} else {
			currentPasswordInput.type = 'password';
			newPasswordInput.type = 'password';
			confirmPasswordInput.type = 'password';
			eye_icon = faEye;
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
		<button class="update" aria-label="update name">{$_('update')}</button>
	</form>

	<form action="?/email" method="POST" autocomplete="off" class="update-form">
		<div>
			<label for="email_input">{$_('email')}</label>
			<input type="email" id="email_input" name="email" value={data.email} />
		</div>
		<button class="update" aria-label="update email">{$_('update')}</button>
	</form>

	<form action="?/password" method="POST" autocomplete="off" class="update-form">
		<div>
			<label for="password_input">{$_('password')}</label>
			<div>
				<label for="current_password_input">{$_('current_password')}</label>
				<div class="password-input">
					<input type="password" id="current_password_input" name="current_password" value="" />
					<button
						id="toggle_password"
						type="button"
						aria-label="Toggle between password visible and password hidden"
						on:click|preventDefault={togglePassword}><Fa id="eye_icon" icon={eye_icon} /></button
					>
				</div>
			</div>
			<div>
				<label for="new_password_input">{$_('new_password')}</label>
				<div class="password-input">
					<input type="password" id="new_password_input" name="new_password" value="" />
					<button
						id="toggle_password"
						type="button"
						aria-label="Toggle between password visible and password hidden"
						on:click|preventDefault={togglePassword}><Fa id="eye_icon" icon={eye_icon} /></button
					>
				</div>
			</div>
			<div>
				<label for="confirm_password_input">{$_('verify_password')}</label>
				<div class="password-input">
					<input type="password" id="confirm_password_input" name="confirm_password" value="" />
					<button
						id="toggle_password"
						type="button"
						aria-label="Toggle between password visible and password hidden"
						on:click|preventDefault={togglePassword}><Fa id="eye_icon" icon={eye_icon} /></button
					>
				</div>
			</div>
		</div>

		<div>
			<button class="update" aria-label="update password">{$_('update')}</button>
		</div>
	</form>
</div>

<style lang="scss">
	@import '$lib/scss/Settings/Account.scss';
</style>
