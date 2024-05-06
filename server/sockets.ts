import type { IncomingMessage, Server, ServerResponse } from 'http';
import { Server as ioServer, type Socket } from 'socket.io';
import type {
	ClientToServerEvents,
	InterServerEvents,
	ServerToClientEvents,
	SocketData,
	message,
	user_chat
} from '../src/lib/types/chat';

/**
 * Handles the sockets and events.
 * @param server
 */
export function handle_sockets(server: Server<typeof IncomingMessage, typeof ServerResponse>) {
	let chat_users: user_chat[] = [];
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

		// Function to reset the activity timer
		const resetActivityTimer = () => {
			clearTimeout(activityTimer);
			activityTimer = setTimeout(() => {
				const redirectUrl = '/dashboard';
				socket.emit('redirect', redirectUrl);
				socket.disconnect(true); // Disconnect socket after timeout
			}, SOCKET_TIMEOUT);
		};

		socket.on('name', async (name) => {
			handle_name(socket, name);
			resetActivityTimer();
		});

		socket.on('message', (message) => {
			handle_message(message);
			resetActivityTimer();
		});

		socket.on('disconnect', () => {
			handle_disconnection(socket);
			clearTimeout(activityTimer);
		});
	});

	/**
	 * Handles the event if a new user joins the chat.
	 * Sends a message to all users and adds the user to the chat_users array.
	 * @param socket
	 * @param name
	 */
	function handle_name(socket: Socket<ClientToServerEvents, ServerToClientEvents>, name: string) {
		socket.data.name = name;
		io.emit('message', {
			author: '',
			text: `👋 ${name} has entered the chat`,
			bot: true
		});
		chat_users.push({ id: socket.id, name: name });
		io.emit('users', chat_users);
	}

	/**
	 * Handles the event if a user sends a message.
	 * @param message
	 */
	function handle_message(message: message) {
		console.log('message:', message);
		io.emit('message', { ...message, bot: false });
	}

	/**
	 * Handles the event if a user disconnects.
	 * @param socket
	 */
	function handle_disconnection(socket: Socket<ClientToServerEvents, ServerToClientEvents>) {
		chat_users = chat_users.filter((user) => user.id != socket.id);
		io.emit('users', chat_users);
		io.emit('message', {
			author: '',
			text: `🏃‍♀️ ${socket.data.name} has left the chat`,
			bot: true
		});
	}
}
