<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="delete-account">
	<h2 class="danger-zone">{$_('danger_zone')}</h2>
	<h4 class="error">{$_('account_will_be_gone')}</h4>
	<form action="?/delete_account" method="POST" class="delete_account_form">
		<div>
			<label for="delete_account_password_input">{$_('password')}</label>
			<input
				type="password"
				id="delete_account_password_input"
				name="password_delete_account"
				value=""
			/>
		</div>
		<button class="update" aria-label="delete Account">{$_('delete_account')}</button>
	</form>
</div>
