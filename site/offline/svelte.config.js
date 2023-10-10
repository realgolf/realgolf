import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		prerender: {
			handleHttpError: ({ status, path, message }) => {
				if (status === 500) {
					console.error(`Error during prerendering: ${message}`);
					// Return a custom error page for 500 errors
					return {
						status: 500,
						html: '<p>An internal server error occurred. Please try again later.</p>'
					};
				}
			}
		}
	}
};

export default config;
