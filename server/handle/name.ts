import type { Server as ioServer, Socket } from 'socket.io';
import type {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData,
	user_chat
} from '../../src/lib/types/server';

export function handle_name(
	socket: Socket<ClientToServerEvents, ServerToClientEvents>,
	name: string,
	chat_users: user_chat[],
	io: ioServer<ClientToServerEvents, ServerToClientEvents, object, SocketData>
) {
	// Add the new user to the chat_users array
	socket.data.name = name;

	// Emit a message to all clients that a new user has joined
	io.emit('message', {
		author: '',
		text: `${name} has entered the chat`,
		bot: true
	});
	chat_users.push({ id: socket.id, name });
	io.emit('users', chat_users);
}
