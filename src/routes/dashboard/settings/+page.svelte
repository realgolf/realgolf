<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/shared/utils/capitalizeFirstLetter';
	import { faEye } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';

	export let form;
	export let data;

	// eslint-disable-next-line
	let handicap_history: any[] | undefined = [];

	onMount(() => {
		handicap_history = data.handicap_history;
	});

	onMount(() => {
		const newPasswordInput = document.getElementById('new_password_input') as HTMLInputElement;
		const currentPasswordInput = document.getElementById(
			'current_password_input'
		) as HTMLInputElement;
		const confirmPasswordInput = document.getElementById(
			'confirm_password_input'
		) as HTMLInputElement;

		const toggleButton = document.getElementById('toggle_password');

		if (toggleButton && newPasswordInput && currentPasswordInput && confirmPasswordInput) {
			toggleButton.addEventListener('click', function (event) {
				event.preventDefault(); // Prevent form submission

				if (
					newPasswordInput.type === 'password' &&
					currentPasswordInput.type === 'password' &&
					confirmPasswordInput.type === 'password'
				) {
					newPasswordInput.type = 'text';
					currentPasswordInput.type = 'text';
					confirmPasswordInput.type = 'text';
				} else {
					newPasswordInput.type = 'password';
					currentPasswordInput.type = 'password';
					confirmPasswordInput.type = 'password';
				}
			});
		}
	});

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

<svelte:head>
	<title>Real Golf - {$_('settings')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('settings')}</h1>

	{#if form?.message}
		<p class="success">
			{form.message}
		</p>
	{/if}

	{#if form?.error}
		<p class="error">
			{form.error}
		</p>
	{/if}

	{#if show_copy_info}
		<p class="success">{$_('id_copy_success')}</p>
	{/if}

	<div id="account">
		<h2>{$_('account')}</h2>

		<div class="id">
			<p>{$_('your_id')}: {data.id}</p>
			<button on:click={() => copy_to_clipboard(data.id)}>{$_("copy_id")}</button>
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

	<div class="handicap">
		<h2>{$_('handicap')}</h2>
		<p class="success">
			{$_('what_is_the_handicap')}
		</p>
		<p class="underline">{$_('current_handicap')}: {data.handicap}</p>
		<p class="underline">
			{$_('handicap_last_updated', {
				values: { lastUpdateDate: data.handicap_updated.toLocaleString() }
			})}
		</p>
		<p>
			{$_("when_handicap_changed")}
		</p>

		<div id="update-handicap">
			<form action="?/handicap" method="POST" class="handicap-form">
				<label for="handicap">{$_("enter_new_handicap")}</label>
				<input type="string" name="handicap" id="handicap" bind:value={data.handicap} />
				<button aria-label="Update Handicap">{$_('update')}</button>
			</form>
		</div>

		{#if handicap_history && handicap_history.length > 0}
			<div class="handicap_history">
				<details>
					<summary>{$_("handicap_hstory")}</summary>
					{#each handicap_history.slice().reverse() as handicap}
						<div>
							<p>{$_("handicap")}: {handicap.handicap}</p>
							<p>{$_("updated_at_the")}: {new Date(handicap.date).toLocaleString()}</p>
						</div>
					{/each}
					<form action="?/clear_handicap_history" method="POST">
						<button>{$_("clear_history")}</button>
					</form>
				</details>
			</div>
		{/if}
	</div>

	<div class="measurement">
		<h2>{$_("measurement_unit")}</h2>
		<p class="underline">
			{$_("current_measurement_unit")}: {capitalizeFirstLetter(data.measurement_unit)}
		</p>
		<form action="?/measurement" method="POST" class="measurement-form">
			<label for="measurement-unit">{$_("select_measurement_unit")}:</label>
			<select id="measurement-unit" name="measurement-unit" bind:value={data.measurement_unit}>
				<option value="yards">Yards</option>
				<option value="meters">Meters</option>
			</select>
			<br />
			<button aria-label="update Measurement Unit">{$_('update')}</button>
		</form>
	</div>

	<div id="preferences">
		<h2>{$_("appearance")}</h2>
		<p class="underline">
			{$_("current_theme")}: {capitalizeFirstLetter(data.theme)}
		</p>
		<form action="?/theme" method="POST" class="theme-form">
			<label for="theme-settings">{$_("select_your_theme")}:</label>
			<select id="theme-settings" name="theme-settings" bind:value={data.theme}>
				<option value="dark">{$_("dark")}</option>
				<option value="light">{$_("light")}</option>
				<option value="system">{$_("system")}</option>
			</select>
			<br />
			<button aria-label="update Theme">{$_('update')}</button>
		</form>

		<h2>{$_("rounded_corners")}</h2>
		<p class="underline">
			{$_("current_rounded_corner")}: {JSON.stringify(data.rounded_corners)}
		</p>
		<form action="?/rounded_corners" method="POST" class="rounded-corners-form">
			<div class="same-row">
				<label for="rounded-corners-settings">{$_("select_prefered_rounded_corners")}:</label>
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

		<h2>{$_("animations")}</h2>
		<p class="underline">
			{$_("current_animation_setting")}: {JSON.stringify(data.animation)}
		</p>
		<form action="?/animation" method="POST" class="animation-form">
			<div class="same-row">
				<label for="animation-settings">{$_("select_prefered_animation_setting")}:</label>
				<input type="checkbox" name="animation" id="animation" bind:checked={data.animation} />
			</div>
			<br />
			<button aria-label="update Animation">{$_('update')}</button>
		</form>
	</div>

	<div class="delete-account">
		<h2 class="danger-zone">{$_("danger_zone")}</h2>
		<h2 class="error">{$_("account_will_be_gone")}</h2>
		<form action="?/delete_account" method="POST" class="delete_account_form">
			<div>
				<label for="delete_account_password_input">{$_("password")}</label>
				<input
					type="password"
					id="delete_account_password_input"
					name="password_delete_account"
					value=""
				/>
			</div>
			<button aria-label="delete Account">{$_("delete_account")}</button>
		</form>
	</div>

	<form action="/logout" method="POST" class="logout-form">
		<button>{$_("sign_out")}</button>
	</form>
{/if}

<style lang="scss">
	.id {
		margin-bottom: 1rem;

		button {
			margin: 1rem 0;
		}
	}

	.handicap_history > details {
		&[open] summary {
			text-decoration: underline;
			margin-bottom: 20px;
		}

		div {
			background-color: var(--nav-color);
			width: max-content;
			padding: 50px 50px;
			border-radius: var(--border-radius);
			border: 3px solid var(--border-color);
			margin-right: auto;
			margin-bottom: 20px;
		}
	}

	.update-form {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: end;
		gap: 1rem;
	}

	.same-row {
		display: flex;
		flex-direction: row;

		& > label {
			height: max-content;
			margin-bottom: 0;
		}

		input {
			margin-top: 0.1rem;
			margin-left: 1rem;
		}
	}

	.logout-form {
		margin-top: 1.5rem;
	}

	.error {
		font-size: var(--medium-font);
	}

	.danger-zone {
		color: red;
	}

	.underline {
		text-decoration: underline;
	}
</style>
