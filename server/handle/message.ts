import { Socket, Server as ioServer } from 'socket.io';
import type {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData,
	message
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
	if (message.bot && message.text.includes("You can't send an empty message.")) {
		console.log('message.bot:', message.bot);
		socket.emit('message', {
			author: '',
			text: `${message.author} You can't send an empty message.`,
			bot: true
		});
	} else {
		io.emit('message', { ...message });
	}
}
