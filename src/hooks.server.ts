import { authenticate } from '$lib/server/user/authenticate';
import { cookie_options } from '$lib/server/user/utils';
import { redirect, type Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.request.headers.get('accept-language')?.split(',')[0];

	if (lang) {
		locale.set(lang);
	}

	const is_protected = event.url.pathname.startsWith('/dashboard');

	const auth = authenticate(event.cookies);

	if (is_protected && !auth) {
		const url = event.url.pathname;
		console.log('url', url);
		event.cookies.delete('email', cookie_options);
		event.cookies.delete('name', cookie_options);
		throw redirect(307, '/login?redirect=' + url);
	}

	const response = await resolve(event);
	return response;
};
