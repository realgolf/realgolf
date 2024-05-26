<script lang="ts">
	import { browser } from '$app/environment';
	import { faEye } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import type { ActionData } from './$types';

	export let form: ActionData;

	function togglePassword() {
		const passwordInput = document.getElementById('password_input') as HTMLInputElement;
		if (passwordInput.type === 'password') {
			passwordInput.type = 'text';
		} else {
			passwordInput.type = 'password';
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
	<title>Real Golf - {$_('login')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('login')}</h1>

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
					tabindex="-1"><Fa id="eye_icon" icon={faEye} /></button
				>
			</div>
		</div>
		<button>{$_('login')}</button>
	</form>

	{#if form?.user}
		<p class="success">{$_('redirecting')}...</p>
	{/if}

	{#if form?.error}
		<p class="error">
			{form.error}
		</p>
	{/if}
{/if}

<style lang="scss">
	.password-input {
		position: relative;
		/*border: 0.1rem solid #555 !important; */
		border-radius: var(--border-radius) !important;
		display: flex;
		align-items: center;

		/* &:focus-within {
			border: 0.1rem solid var(--accent-color) !important;
		} */

		input {
			width: 100%;
			padding-right: 2.5rem;
		}

		button {
			position: absolute;
			right: 0.5rem;
			background-color: transparent;
			border: none !important;
			cursor: pointer;
			padding: 0;
			margin: 0 !important;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2rem;
			height: 100%;

			&:focus {
				outline: none !important;
				outline-offset: 0 !important;
			}
		}

		#eye_icon {
			font-size: 1rem;
		}
	}
</style>
