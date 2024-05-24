import { ClientToServerEvents, ServerToClientEvents, SocketData } from '$lib/types/server';
import { Socket } from 'socket.io';

// Function to reset the activity timer
export const resetActivityTimer = (
	activityTimer: NodeJS.Timeout,
	socket: Socket<ClientToServerEvents, ServerToClientEvents, object, SocketData>,
	SOCKET_TIMEOUT: number
) => {
	clearTimeout(activityTimer);
	activityTimer = setTimeout(() => {
		const redirectUrl = '/dashboard';
		socket.emit('redirect', redirectUrl);
		socket.disconnect(true); // Disconnect socket after timeout
	}, SOCKET_TIMEOUT);
	return activityTimer;
};
