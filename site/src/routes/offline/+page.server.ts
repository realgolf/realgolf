import { redirect } from '@sveltejs/kit';
const URL = 'https://offline.golf.moinjulian.com';

export function load() {
	throw redirect(307, URL);
}