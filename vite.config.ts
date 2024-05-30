import { sveltekit } from '@sveltejs/kit/vite';
import { readFileSync } from 'fs';
import { IncomingMessage, Server, ServerResponse } from 'http';
import { fileURLToPath } from 'url';
import type { UserConfig, ViteDevServer } from 'vite';
import { handle_sockets } from './server/sockets';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

const socket_io_plugin = {
	name: 'socket.io plugin',
	configureServer(server: ViteDevServer) {
		handle_sockets(server.httpServer as Server<typeof IncomingMessage, typeof ServerResponse>);
	}
};

const config: UserConfig = {
	plugins: [sveltekit(), socket_io_plugin],
	define: {
		PKG: pkg
	}
};

export default config;
