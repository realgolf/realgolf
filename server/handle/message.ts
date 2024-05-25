import { Socket, Server as ioServer } from 'socket.io';
import type {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData,
	message,
	private_message
} from '../../src/lib/types/server';

/**
 * Handles the event if a user sends a message.
 * @param message
 */
export function handle_message(
	message: message,
	io: ioServer<ClientToServerEvents, ServerToClientEvents, object, SocketData>,
	socket: Socket<ClientToServerEvents, ServerToClientEvents, object, SocketData>
) {
	console.log('message:', message);
	if (message.bot && message.text.includes("you can't send an empty message.")) {
		socket.emit('message', {
			message_type: 'bot',
			author: '',
			text: `${message.author} you can't send an empty message.`,
			bot: true
		});
	} else {
		io.emit('message', { ...message });
	}
}

export function handle_private_message(
	private_message: private_message,
	io: ioServer<ClientToServerEvents, ServerToClientEvents, object, SocketData>
) {
	console.log('private_message:', private_message);

	const target_socket = io.sockets.sockets.get(private_message.to);
	let target_name = 'unknown user';
	if (target_socket) {
		target_name = target_socket.data.name;
	}

	private_message.target_name = target_name;

	io.to(private_message.to).emit('message', { ...private_message });
	io.to(private_message.from).emit('message', { ...private_message });
}

export function handle_help_info(
	socket: Socket<ClientToServerEvents, ServerToClientEvents, object, SocketData>
) {
	const info = `
		Shortcuts: <br>
		/help - Shows this message <br>
		/pm [user] [message] - Sends a private message to a user <br>
		`;

	socket.emit('message', {
		message_type: 'bot',
		author: '',
		text: info,
		bot: true
	});
}
