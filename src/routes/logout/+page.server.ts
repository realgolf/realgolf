import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load(event): Promise<unknown> {
	event.cookies.delete('auth-token', { path: '/' });
	event.cookies.delete('email', { path: '/' });
	event.cookies.delete('name', { path: '/' });
	throw redirect(301, '/');
}

export const actions: Actions = {
	default: async (event) => {
		event.cookies.delete('auth-token', { path: '/' });
		event.cookies.delete('email', { path: '/' });
		event.cookies.delete('name', { path: '/' });
		throw redirect(301, '/');
	}
};
