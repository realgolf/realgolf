<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Messages from '$lib/components/Chat/Messanges.svelte';
	import SendForm from '$lib/components/Chat/SendForm.svelte';
	import Status from '$lib/components/Chat/Status.svelte';
	import { redirect } from '$lib/scripts/Archive/redirect';
	import type {
		ClientToServerEvents,
		message,
		ServerToClientEvents,
		user_chat
	} from '$lib/types/chat';
	import { io, type Socket } from 'socket.io-client';
	import { tick } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	let username: string = data.username as string;
	let messages: message[] = [];
	let messages_element: HTMLElement;
	let chat_users: user_chat[] = [];
	let text = '';
	let socket: undefined | Socket<ServerToClientEvents, ClientToServerEvents>;

	if (browser && !username) {
		goto('/dashboard/chat');
	} else {
		setup_socket();
	}

	function setup_socket() {
		socket = io();

		socket.emit('name', username);

		socket.on('message', async (message: message) => {
			messages = [...messages, message];
			scroll_to_bottom();
		});

		socket.on('users', (_users: user_chat[]) => {
			chat_users = _users;
		});

		socket.on('redirect', (url: string) => {
			console.log('redirect', url);
			redirect(url);
		});
	}

	function send_message() {
		socket?.emit('message', {
			author: username,
			text: text,
			bot: false
		});
		text = '';
	}

	async function scroll_to_bottom() {
		await tick();
		if (messages_element) {
			messages_element.scrollTop = messages_element.scrollHeight;
		}
	}
</script>

<svelte:head>
	<title>Real Golf - {$_('chat')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('chat')}</h1>

	{#if username}
		<Status {chat_users} {username} />
		<Messages bind:messages bind:messages_element />
		<SendForm bind:text {send_message} />
	{:else}
		<p>{$_('you_are_not_loged_in')}</p>
	{/if}
{/if}

<style>
	p {
		text-align: center;
		padding-block: 1rem;
	}
</style>
