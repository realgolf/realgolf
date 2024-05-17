<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { faEye } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import type { ActionData } from './$types';

	export let form: ActionData;

	function togglePassword() {
		const passwordInput = document.getElementById('password_input') as HTMLInputElement;
		const passwordVerifyInput = document.getElementById('password_verify_input') as HTMLInputElement;

		if (passwordInput.type === 'password' && passwordVerifyInput.type === 'password') {
			passwordInput.type = 'text';
			passwordVerifyInput.type = 'text';
		} else {
			passwordInput.type = 'password';
			passwordVerifyInput.type = 'password';
		}
	}
</script>

<svelte:head>
	<title>Real Golf - {$_('register')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('register')}</h1>

	<form method="POST" autocomplete="off">
		<div>
			<label for="email_input">{$_('email')}</label>
			<input type="email" id="email_input" name="email" value={form?.user?.email ?? ''} />
		</div>
		<div>
			<label for="password_input">{$_('password')}</label>
			<input type="password" id="password_input" name="password" />
		</div>
		<div>
			<label for="password_verify_input">{$_('verify_password')}</label>
			<input type="password" id="password_verify_input" name="password_verify" />
		</div>
		<button on:click|preventDefault={togglePassword} id="toggle_password" type="button"><Fa id="eye_icon" icon={faEye} /></button>
		<div>
			<label for="name_input">{$_('name')}</label>
			<input type="text" id="name_input" name="name" value={form?.user?.name ?? ''} />
		</div>

		<div>
			<label for="username_input">{$_('username')}</label>
			<input type="text" name="username" id="username_input" value={form?.user?.username ?? ''} />
		</div>

		<div>
			<label for="handicap">{$_('handicap')}</label>
			<input type="text" name="handicap" id="handicap" />
		</div>
		<button>{$_('register')}</button>
	</form>

	{#if form?.error}
		<p class="error">
			{#if form?.error == 'There is already a account with this username.' || form?.error == 'There is already an account with this email.' || form?.error == "Handicap is required. If you don't have a handicap, please enter 54."}
				{form?.error}
			{:else}
				{form?.error}
				<p use:sanitizeHTML={[$_('might_have_successfully_registered')]} />
			{/if}
		</p>
	{:else if form?.user?.name}
		<p
			class="success"
			use:sanitizeHTML={[$_('successfully_registered', { values: { name: form?.user?.name } })]}
		/>
	{/if}
{/if}
