import dotenv from 'dotenv';
import { generate_server } from './server.js';

async function init() {
	dotenv.config();
	const server = generate_server();
}

init();
