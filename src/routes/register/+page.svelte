<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let eye_icon = faEye;
	let currentStep = 1;

	let email = '';
	let password = '';
	let passwordVerify = '';

	let name = '';
	let username = '';
	let handicap = '';

	function togglePassword() {
		toggleInputType();
		toggleIcon();
	}

	function toggleInputType() {
		const passwordInput = document.getElementById('password_input') as HTMLInputElement;
		const passwordVerifyInput = document.getElementById(
			'password_verify_input'
		) as HTMLInputElement;

		const newType = passwordInput.type === 'password' ? 'text' : 'password';
		passwordInput.type = newType;
		passwordVerifyInput.type = newType;
	}

	function toggleIcon() {
		eye_icon = eye_icon === faEye ? faEyeSlash : faEye;
	}

	function nextStep() {
		if (currentStep === 1) {
			email = (document.getElementById('email_input') as HTMLInputElement).value;
			password = (document.getElementById('password_input') as HTMLInputElement).value;
			passwordVerify = (document.getElementById('password_verify_input') as HTMLInputElement).value;
		} else if (currentStep === 2) {
			name = (document.getElementById('name_input') as HTMLInputElement).value;
			username = (document.getElementById('username_input') as HTMLInputElement).value;
			handicap = (document.getElementById('handicap') as HTMLInputElement).value;
		}
		currentStep = 2;
	}

	function previousStep() {
		currentStep = 1;
	}
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('sign_up')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<div class="full-screen">
		<div class="register">
			<h1>{$_('sign_up')}</h1>

			<form method="POST" autocomplete="off">
				{#if currentStep === 1}
					<div>
						<label for="email_input">{$_('email')}</label>
						<input type="email" id="email_input" name="email" value={email} />
					</div>

					<label for="password_input">{$_('password')}</label>
					<div class="password-input">
						<input type="password" id="password_input" name="password" value={password} />
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
						<input
							type="password"
							id="password_verify_input"
							name="password_verify"
							value={passwordVerify}
						/>
						<button
							on:click|preventDefault={togglePassword}
							aria-label="Show password in clear text"
							id="toggle_password"
							type="button"
							tabindex="-1"><Fa id="eye_icon" icon={eye_icon} /></button
						>
					</div>

					<button type="button" on:click={nextStep}>{$_('next')}</button>
				{:else if currentStep === 2}
					<div style="display: none;">
						<input type="text" id="email" name="email" value={email} />
						<input type="password" id="password" name="password" value={password} />
						<input
							type="password"
							id="password_verify"
							name="password_verify"
							value={passwordVerify}
						/>
					</div>

					<div>
						<label for="name_input">{$_('name')}</label>
						<input type="text" id="name_input" name="name" value={name} />
					</div>

					<div>
						<label for="username_input">{$_('username')}</label>
						<input type="text" name="username" id="username_input" value={username} />
					</div>

					<div>
						<label for="handicap">{$_('handicap')}</label>
						<input type="text" name="handicap" id="handicap" value={handicap} />
					</div>

					<div class="buttons">
						<button type="button" on:click={previousStep} class="button">{$_('previous')}</button>
						<button type="submit" class="register button">{$_('sign_up')}</button>
					</div>
				{/if}
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

		.buttons {
			display: flex;
			justify-content: space-between;

			.button {
				margin-right: 10%;

				&:last-child {
					margin-right: 0 !important;
				}
			}
		}

		.register {
			width: 100%;
		}
	}
</style>
