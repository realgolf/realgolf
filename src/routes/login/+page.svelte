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
		window.location.href = '/dashboard';
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
			<input type="password" id="password_input" name="password" />
			<button
				on:click|preventDefault={togglePassword}
				aria-label="Show password in clear text"
				id="toggle_password"
				type="button"><Fa id="eye_icon" icon={faEye} /></button
			>
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

<style>
	#toggle_password {
		margin-top: 10px;
	}
</style>
