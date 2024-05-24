import { Server as ioServer } from 'socket.io';
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
	io: ioServer<ClientToServerEvents, ServerToClientEvents, object, SocketData>
) {
	console.log('message:', message);
	io.emit('message', { ...message, bot: false });
}
