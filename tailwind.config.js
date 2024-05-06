/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				error: '#ffff00',
				light: '#bbb',
				dark: '#131416'
			}
		}
	},
	plugins: []
};
