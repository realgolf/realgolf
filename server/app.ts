import dotenv from 'dotenv';
import { generate_server } from './server.js';
import { handle_sockets } from './sockets.js';

async function init() {
	dotenv.config();
	const server = generate_server();
	handle_sockets(server);
}

init();
