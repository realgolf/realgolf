import { Cookies } from '@sveltejs/kit';
import { authenticate } from '../authenticate';
import { User_Model } from '../models';

export async function change_two_factor_auth(cookies: Cookies, two_factor_auth: boolean) {
	const auth = authenticate(cookies);

	if (!auth) {
		return { error: 'You are not authenticated' };
	}

	const { id } = auth;

	const user = await User_Model.findOne({ id });

	if (!user) {
		return { error: 'User could not be found' };
	}

	if (user && user.user) {
		user.user.two_factor_auth = two_factor_auth;
	}

	try {
		await user.save();
		return { two_factor_auth };
	} catch (err) {
		return { error: err as string };
	}
}
