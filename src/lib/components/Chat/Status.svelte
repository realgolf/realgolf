<script lang="ts">
	export let username: string;
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { _ } from 'svelte-i18n';
</script>

<aside>
	<p use:sanitizeHTML={[$_('logged_in_as', { values: { username: username } })]} />
</aside>

<style>
	aside {
		padding: 0.5rem;
		color: var(--dark-font-color);
		font-size: smaller;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media (min-width: 420px) {
		aside {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
