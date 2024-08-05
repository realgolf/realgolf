<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('support')}</title>
</svelte:head>

<h1>{$_('support')}</h1>

<form method="POST" autocomplete="off">
	<label for="name">{$_('name')}</label>
	<input type="text" id="name" name="name" />
	<label for="email">{$_('your_email')}</label>
	<input type="text" id="email" name="email" />
	<!--Honeypot Field-->
	<input type="text" name="honeypot" style="display:none" />
	<label for="subject">{$_('subject')}</label>
	<select name="subject" id="subject">
		<option value="other">{$_('other')}</option>
		<option value="account">{$_('account')}</option>
		<!-- <option value="payment">Payment</option> -->
		<option value="technical">{$_('technical')}</option>
		<option value="bug">{$_('bug')}</option>
		<option value="feature">{$_('feature_request')}</option>
	</select>
	<label for="message">{$_('message')}</label>
	<textarea name="message" id="message" cols="30" rows="10" />
	<br />
	<button type="submit">{$_('submit')}</button>
</form>

<style lang="scss">
	textarea {
		background-color: var(--background-color);
		color: var(--font-color);
		font-size: var(--medium-font);
		width: 100%;
	}
</style>
