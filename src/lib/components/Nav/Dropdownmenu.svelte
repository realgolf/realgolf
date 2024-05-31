<script lang="ts">
	import {
		faBars,
		faBook,
		faBookBookmark,
		faBookOpenReader,
		faChartLine,
		faDownload,
		faGamepad,
		faGavel,
		faGear,
		faHouse,
		faInfoCircle,
		faList,
		faMessage,
		faQuestionCircle,
		faSave,
		faSignInAlt,
		faSignOutAlt,
		faTh,
		faUser,
		faUserPlus,
		faUsers,
		faWrench
	} from '@fortawesome/free-solid-svg-icons';
	import { io } from 'socket.io-client';
	import { onDestroy, onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { _ } from 'svelte-i18n';

	export let auth: string | undefined;
	export let username: string | undefined;

	let url: string;
	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function closeDropdown() {
		isOpen = false;
	}

	let totalOnlineUsers: number = 0;

	function setupSocket() {
		let socket = io();

		socket.on('socketNumber', (number) => {
			totalOnlineUsers = number;
		});
	}

	setupSocket();

	onMount(() => {
		url = window.location.pathname;

		window.addEventListener('keypress', (e) => {
			if (e.key === 'm' && e.ctrlKey) {
				toggleDropdown();
			}
		});

		function closeDropdownOnClick(event: MouseEvent | TouchEvent): void {
			if (
				event.target instanceof Element &&
				!event.target.closest('.dropdown') &&
				!event.target.closest('.dropdown-button') &&
				!event.target.closest('.dropdown-content')
			) {
				closeDropdown();
			}
		}

		window.addEventListener('click', closeDropdownOnClick);
		window.addEventListener('touchend', closeDropdownOnClick);

		onDestroy(() => {
			window.removeEventListener('click', closeDropdown);
		});
	});
</script>

<div class="dropdown">
	<button aria-label="Open Menu" class="dropdown-button" on:click|stopPropagation={toggleDropdown}>
		<Fa icon={faBars} />
	</button>
</div>
{#if isOpen}
	<div class="blurry-background" />
	<div class="dropdown-content">
		<button class="close-button" on:click={closeDropdown}>x</button>
		<div class="home row border-bottom">
			<a href="/"><span><Fa icon={faHouse} /></span>{$_('home')}</a>
			<a href="/download"><span><Fa icon={faDownload} /></span>{$_('download')}</a>
		</div>
		{#if !auth}
			<div class="logged-out row border-bottom">
				<a href="/register"><span><Fa icon={faUserPlus} /></span>{$_('sign_up')}</a>
				<a href="/login?redirect={url}"><span><Fa icon={faSignInAlt} /></span>{$_('sign_in')}</a>
			</div>
		{/if}
		{#if auth}
			<div class="logged-in row border-bottom">
				<a href="/{username}"><span><Fa icon={faUser} /></span>{username}</a>
				<a href="/dashboard"><span><Fa icon={faTh} /></span>{$_('dashboard')}</a>
				<a href="/dashboard/settings"><span><Fa icon={faGear} /></span>{$_('settings')}</a>
				<a href="/dashboard/chat"><span><Fa icon={faMessage} /></span>{$_('chat')}</a>
			</div>
			<div class="internal-links row border-bottom">
				<a href="/dashboard/games"><span><Fa icon={faGamepad} /></span>{$_('games')}</a>
				<a href="/dashboard/archive"><span><Fa icon={faSave} /></span>{$_('archive')}</a>
				<a href="/dashboard/info"><span><Fa icon={faInfoCircle} /></span>{$_('info')}</a>
				<a href="/dashboard/levels"><span><Fa icon={faChartLine} /></span>{$_('levels')}</a>
				<a href="/dashboard/rules"><span><Fa icon={faBook} /></span>{$_('rules')}</a>
				<a href="/dashboard/tools"><span><Fa icon={faWrench} /></span>{$_('tools')}</a>
				<a href="/dashboard/planner"><span><Fa icon={faList} /></span>{$_('planner')}</a>
			</div>
		{/if}
		<div class="row border-bottom">
			<p>
				{$_('total_online_users', { values: { totalOnlineUsers } })}
			</p>
		</div>
		<div class="external-links row border-bottom">
			<a href="https://blog.realgolf.games"
				><span><Fa icon={faBookOpenReader} /></span>{$_('blog')}</a
			>
			<a href="/faq"><span><Fa icon={faQuestionCircle} /></span>{$_('faq')}</a>
			<a href="https://rules.realgolf.games"
				><span><Fa icon={faBookBookmark} /></span>{$_('golfrules')}</a
			>
		</div>
		<div class="copyright row border-bottom">
			<a href="/support"><Fa icon={faUsers} /> {$_('support')}</a>
			<a href="/imprint"><Fa icon={faGavel} /> {$_('imprint_heading')}</a>
			<a href="/privacy"><Fa icon={faBook} /> {$_('privacy_policy')}</a>
			<p class="copyright_text">&copy; 2021 - {new Date().getFullYear()} RealGolf.Games</p>
			<p>{$_('all_rights_reserved')}</p>
			<a class="underline" target="_blank" href="https://github.com/realgolf">{$_('github')}</a>
		</div>
		{#if auth}
			<div class="logout row">
				<form action="/logout" method="POST" class="logout-form">
					<button class="link"
						><span><Fa class="Fa" icon={faSignOutAlt} /></span>{$_('sign_out')}</button
					>
				</form>
			</div>
		{/if}
		<div class="version row">
			<small>{PKG.version}</small>
		</div>
	</div>
{/if}

<style lang="scss">
	@import '$lib/scss/Nav/Dropdownmenu.scss';

	.copyright_text {
		text-wrap: nowrap !important;
	}
</style>
