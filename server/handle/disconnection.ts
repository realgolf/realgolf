import { Server as ioServer, type Socket } from 'socket.io';
import type {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData
} from '../../src/lib/types/server';

/**
 * Handles the event if a user disconnects.
 * @param socket
 */
export function handle_disconnection(
	socket: Socket<ClientToServerEvents, ServerToClientEvents>,
	io: ioServer<ClientToServerEvents, ServerToClientEvents, object, SocketData>
) {
	const userName = socket.data.name;

	io.emit('message', {
		author: '',
		text: `${userName} has left the chat`,
		bot: true
	});
}
