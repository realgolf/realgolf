import { login_user } from '$lib/server/user/login';
import { cookie_options } from '$lib/server/user/utils';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = (data.get('email') as string)?.toLowerCase()?.trim();
		const password = data.get('password') as string;

		const user_data = await login_user(email, password, event);

		if ('error' in user_data) {
			return fail(400, { email, error: user_data.error });
		} else {
			const { token, user } = user_data;

			event.cookies.set('auth-token', token, cookie_options);
			event.cookies.set('email', user.email, cookie_options);
			event.cookies.set('name', user.name, cookie_options);
			event.cookies.set('username', user.username, cookie_options);

			return { email, user };
		}
	}
};
