<script lang="ts">
	import { browser } from '$app/environment';
	import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let eye_icon = faEye;

	function togglePassword() {
		const passwordInput = document.getElementById('password_input') as HTMLInputElement;
		if (passwordInput.type === 'password') {
			passwordInput.type = 'text';
			eye_icon = faEyeSlash;
		} else {
			passwordInput.type = 'password';
			eye_icon = faEye;
		}
	}

	if (browser && form?.user) {
		const queryString = window.location.search;
		console.log(queryString);
		const urlParams = new URLSearchParams(queryString);
		const redirect = urlParams.get('redirect');
		window.location.href = redirect || '/dashboard';
	}
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('sign_in')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<div class="full-screen">
		<div class="sign-in">
			<h1>{$_('sign_in')}</h1>

			<form method="POST" autocomplete="off">
				<div>
					<label for="email_input">{$_('email')}</label>
					<input type="email" id="email_input" name="email" value={form?.email ?? ''} />
				</div>
				<div>
					<label for="password_input">{$_('password')}</label>
					<div class="password-input">
						<input type="password" id="password_input" name="password" />
						<button
							on:click|preventDefault={togglePassword}
							aria-label="Show password in clear text"
							id="toggle_password"
							type="button"
							tabindex="-1"><Fa id="eye_icon" icon={eye_icon} /></button
						>
					</div>
				</div>
				<button class="login">{$_('sign_in')}</button>
			</form>

			{#if form?.user}
				<p class="success">{$_('redirecting')}...</p>
			{/if}

			{#if form?.error}
				<p class="error">
					{form.error}
				</p>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	@import '$lib/scss/login.scss';
</style>
