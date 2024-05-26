<script lang="ts">
	import { page } from '$app/stores';
	import type { User } from '$lib/server/user/types';
	import { faHouse, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import { _ } from 'svelte-i18n';
	import Dropdownmenu from './Dropdownmenu.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Search from './Search.svelte';

	$: currentPagePath = $page.url.pathname;

	$: isHomePage = currentPagePath === undefined || currentPagePath === '/';

	export let auth: string | undefined;
	export let username: string | undefined;
	export let all_users: User[];

	type link = {
		path: string;
		icon: IconDefinition;
		title: string;
	};

	let links: link[] = [
		{
			path: '/',
			icon: faHouse,
			title: 'Home'
		}
	];
</script>

<nav>
	<ul>
		{#each links as { path, icon, title }}
			<li>
				<a translate="no" href="https://realgolf.games"
					><span style="font-weight: bold; color: green;">Real</span><span
						style="font-weight: bold; color: grey;">Golf.</span
					><span style="font-weight: bold; color: green;">Games</span>
				</a>
			</li>
		{/each}
		<li>
			{#if isHomePage}
				<div class="home-page">
					<div class="sign-in">
						<a href="/login" rel="external">{$_('sign_in')}</a>
					</div>
					<div class="sign-up">
						<a href="/register" rel="external">{$_('sign_up')}</a>
					</div>
				</div>
			{:else}
				<div class="search">
					<Search {all_users} />
				</div>
				<div class="language_switcher">
					<LanguageSwitcher />
				</div>
				<div class="dropdown-menu">
					<Dropdownmenu {auth} {username} />
				</div>
			{/if}
		</li>
	</ul>
</nav>

<style lang="scss">
	@import '$lib/scss/Nav/Nav.scss';

	li {
		a {
			text-decoration: none !important;

			&:hover {
				text-decoration: none !important;
			}

			&:hover::before {
				width: 0% !important;
			}
		}

		span {
			margin-left: 0 !important;

			&:first-child {
				margin-left: 0.5rem !important;
			}
		}
	}
</style>
