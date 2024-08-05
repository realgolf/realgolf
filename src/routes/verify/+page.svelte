<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';

	export let form;
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('verify')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<div class="full-screen">
		<div class="verify">
			<h1>{$_('verify')}</h1>
			<form action="?/verify" method="POST" autocomplete="off">
				<input type="number" name="verification_code" id="verification_code" maxlength="10" />
				<button>{$_('verify')}</button>
			</form>

			{#if form?.body.error}
				<p class="error">{form.status} - {form.body.error}</p>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.full-screen {
		width: 90vw;

		.verify {
			max-width: 400px;
			margin: 0 auto;

			button {
				width: 100% !important;
			}
		}

		.verify {
			width: 100%;
		}
	}
</style>
