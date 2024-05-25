import { Server as ioServer, type Socket } from 'socket.io';
import type {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData,
	user_chat
} from '../../src/lib/types/server';

/**
 * Handles the event if a user disconnects.
 * @param socket
 */
export function handle_disconnection(
	socket: Socket<ClientToServerEvents, ServerToClientEvents>,
	chat_users: user_chat[],
	io: ioServer<ClientToServerEvents, ServerToClientEvents, object, SocketData>
) {
	const userName = socket.data.name;

	io.emit('message', {
		author: '',
		text: `${userName} has left the chat`,
		bot: true
	});

	// Remove the user from the chat_users array
	chat_users.filter((user) => user.id !== socket.id);
	io.emit('users', chat_users);
}
