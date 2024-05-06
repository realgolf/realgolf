import { sveltekit } from '@sveltejs/kit/vite';
import { IncomingMessage, Server, ServerResponse } from 'http';
import type { UserConfig, ViteDevServer } from 'vite';
import { handle_sockets } from './server/sockets';

const socket_io_plugin = {
	name: 'socket.io plugin',
	configureServer(server: ViteDevServer) {
		handle_sockets(server.httpServer as Server<typeof IncomingMessage, typeof ServerResponse>);
	}
};

const config: UserConfig = {
	plugins: [sveltekit(), socket_io_plugin]
};

export default config;
