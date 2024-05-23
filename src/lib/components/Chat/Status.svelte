<script lang="ts">
	export let username: string;
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import type { user_chat } from '$lib/types/chat';
	import { _ } from 'svelte-i18n';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	export let chat_users: user_chat[] = [];
	export let role_color: string;
</script>

<aside>
	<ul>
		<span>{$_('users')} </span>
		{#each chat_users as user (user.id)}
			<li animate:flip transition:fade style="color: {role_color};">
				{user.name}
			</li>
		{/each}
	</ul>
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

	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	li {
		background-color: var(--bg-color-2);
		padding: 0.2rem 0.4rem;
		border-radius: 0.2rem;
	}

	@media (min-width: 420px) {
		aside {
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>
