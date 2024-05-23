import { asign_role_data } from '$lib/scripts/Public/asign_role_data';
import { User_Model } from '$lib/server/user/models';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async (event: {
	cookies: { get: (arg0: string) => unknown };
}) => {
	const username = event.cookies.get('username');

	const user = await User_Model?.findOne({ 'user.username': username });
	let role_data;

	if (user && user.user) {
		const role = user.user.role;

		role_data = asign_role_data(role);
	}

	return { username, role_data };
};
