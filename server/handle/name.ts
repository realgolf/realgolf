import { Server as ioServer, type Socket } from 'socket.io';
import type {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData,
	user_chat
} from '../../src/lib/types/server';

/**
 * Handles the event if a new user joins the chat.
 * Sends a message to all users and adds the user to the chat_users array.
 * @param socket
 * @param name
 */
export function handle_name(
	socket: Socket<ClientToServerEvents, ServerToClientEvents>,
	name: string,
	io: ioServer<ClientToServerEvents, ServerToClientEvents, object, SocketData>,
	chat_users: user_chat[]
) {
	socket.data.name = name;
	io.emit('message', {
		author: '',
		text: `${name} has entered the chat`,
		bot: true
	});
	chat_users.push({ id: socket.id, name: name });
	io.emit('users', chat_users);
}
