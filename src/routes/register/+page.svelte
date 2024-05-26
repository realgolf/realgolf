<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let eye_icon = faEye;

	function togglePassword() {
		const passwordInput = document.getElementById('password_input') as HTMLInputElement;
		const passwordVerifyInput = document.getElementById(
			'password_verify_input'
		) as HTMLInputElement;

		if (passwordInput.type === 'password' && passwordVerifyInput.type === 'password') {
			passwordInput.type = 'text';
			passwordVerifyInput.type = 'text';
			eye_icon = faEyeSlash;
		} else {
			passwordInput.type = 'password';
			passwordVerifyInput.type = 'password';
			eye_icon = faEye;
		}
	}
</script>

<svelte:head>
	<title>Real Golf - {$_('register')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<div class="full-screen">
		<div class="register">
			<h1>{$_('register')}</h1>

			<form method="POST" autocomplete="off">
				<div>
					<label for="email_input">{$_('email')}</label>
					<input type="email" id="email_input" name="email" value={form?.user?.email ?? ''} />
				</div>

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

				<label for="password_verify_input">{$_('verify_password')}</label>
				<div class="password-input">
					<input type="password" id="password_verify_input" name="password_verify" />
					<button
						on:click|preventDefault={togglePassword}
						aria-label="Show password in clear text"
						id="toggle_password"
						type="button"
						tabindex="-1"><Fa id="eye_icon" icon={eye_icon} /></button
					>
				</div>

				<div>
					<label for="name_input">{$_('name')}</label>
					<input type="text" id="name_input" name="name" value={form?.user?.name ?? ''} />
				</div>

				<div>
					<label for="username_input">{$_('username')}</label>
					<input
						type="text"
						name="username"
						id="username_input"
						value={form?.user?.username ?? ''}
					/>
				</div>

				<div>
					<label for="handicap">{$_('handicap')}</label>
					<input type="text" name="handicap" id="handicap" />
				</div>
				<button class="register">{$_('register')}</button>
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
		</div>
	</div>
{/if}

<style lang="scss">
	.full-screen {
		width: 90vw;

		.register {
			max-width: 400px;
			margin: 0 auto;
		}

		.password-input {
			position: relative;
			border-radius: var(--border-radius) !important;
			display: flex;
			align-items: right;

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
				justify-content: right;
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

		.register {
			width: 100%;
		}
	}
</style>
