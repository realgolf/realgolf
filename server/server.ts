import express from 'express';
import { handler } from '../build/handler.js';

export function generate_server() {
	const PORT = process.env.PORT || 3000;
	const app = express();
	app.use(handler);

	return app.listen(PORT, () => {
		console.log('server is listening on port', PORT);
	});
}
