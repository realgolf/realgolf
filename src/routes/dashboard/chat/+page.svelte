<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Messanges from '$lib/components/Chat/Messanges.svelte';
	import SendForm from '$lib/components/Chat/SendForm.svelte';
	import Status from '$lib/components/Chat/Status.svelte';
	import { redirect } from '$lib/scripts/Archive/redirect';
	import type {
		ClientToServerEvents,
		message,
		ServerToClientEvents,
		user_chat
	} from '$lib/types/server';
	import { io, type Socket } from 'socket.io-client';
	import { tick } from 'svelte';
	import { _, isLoading } from 'svelte-i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	let username: string = data.username as string;
	let role_color: string = data.role_data?.color as string;
	let role_title: string = data.role_data?.title as string;
	let messages: message[] = [];
	let messages_element: HTMLElement;
	let chat_users: user_chat[] = [];
	let text = '';
	let id: string;
	let socket: undefined | Socket<ServerToClientEvents, ClientToServerEvents>;

	if (browser && !username) {
		goto('/dashboard/chat');
	} else {
		setup_socket();
	}

	function setup_socket() {
		socket = io();

		socket.emit('name', username);

		socket.on('id', (_id: string) => {
			id = _id;
		});

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
		if (text.includes('/pm')) {
			const parts = text.split(' ');
			if (parts.length > 2) {
				const reciever = parts[1];
				const reciever_id = chat_users.find((user) => user.name === reciever)?.id ?? '';
				const message = parts.slice(2).join(' ');
				socket?.emit('private_message', {
					message_type: 'private_message',
					author: username,
					to: reciever_id,
					text: message,
					bot: false
				});
				text = '';
			}
			text = '';
		} else if (typeof text === 'string' && text.trim() === '/help') {
			socket?.emit('help_info', {
				message_type: 'bot',
				back_to: socket.id ?? '',
				author: '',
				bot: true
			});
		} else if (text !== '') {
			socket?.emit('message', {
				message_type: 'message',
				author: username,
				text: text,
				bot: false
			});
			text = '';
		} else {
			socket?.emit('message', {
				message_type: 'bot',
				author: username,
				text: `you can't send an empty message.`,
				bot: true
			});
		}
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
		<Messanges bind:messages bind:messages_element />
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
