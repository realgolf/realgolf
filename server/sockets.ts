import type { IncomingMessage, Server, ServerResponse } from 'http';
import { Server as ioServer } from 'socket.io';
import type {
	ClientToServerEvents,
	InterServerEvents,
	ServerToClientEvents,
	SocketData,
	user_chat
} from '../src/lib/types/server';
import { handle_disconnection } from './handle/disconnection.js';
import { handle_help_info, handle_message, handle_private_message } from './handle/message.js';
import { handle_name } from './handle/name.js';
import { resetActivityTimer } from './utils/activityTimer.js';

/**
 * Handles the sockets and events.
 * @param server
 */
export function handle_sockets(server: Server<typeof IncomingMessage, typeof ServerResponse>) {
	const chat_users: user_chat[] = [];
	let socketNumber: number = 0;
	const SOCKET_TIMEOUT = 1000 * 60 * 10; // 10 minutes

	const io = new ioServer<
		ClientToServerEvents,
		ServerToClientEvents,
		InterServerEvents,
		SocketData
	>(server);

	/**
	 * Handles a socket.io connection.
	 */
	io.on('connection', (socket) => {
		let activityTimer: NodeJS.Timeout;
		const id: string = socket.id;
		socketNumber++;

		io.emit('socketNumber', socketNumber);

		socket.emit('id', id);

		socket.on('name', async (name) => {
			handle_name(socket, name, chat_users, io);
			resetActivityTimer(activityTimer, socket, SOCKET_TIMEOUT);
		});

		socket.on('message', (message) => {
			handle_message(message, io, socket);
			resetActivityTimer(activityTimer, socket, SOCKET_TIMEOUT);
		});

		socket.on('private_message', (private_message) => {
			handle_private_message(private_message, io);
			resetActivityTimer(activityTimer, socket, SOCKET_TIMEOUT);
		});

		socket.on('help_info', () => {
			handle_help_info(socket);
			resetActivityTimer(activityTimer, socket, SOCKET_TIMEOUT);
		});

		socket.on('disconnect', () => {
			socketNumber--;
			io.emit('socketNumber', socketNumber);

			handle_disconnection(socket, chat_users, io);
			clearTimeout(activityTimer);
		});
	});
}
