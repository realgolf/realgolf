import type { Cookies } from '@sveltejs/kit';
import { authenticate } from '../authenticate';
import { User_Model } from '../models';

/**
 * Changes the handicap of a user.
 *
 * @param cookies - The cookies object containing the user's authentication token.
 * @param handicap - The new handicap value to set for the user.
 * @returns An object with the updated handicap value or an error message.
 */
export async function change_handicap(cookies: Cookies, handicap: number) {
	const auth = authenticate(cookies);

	if (!auth) {
		return { error: 'You are not authenticated' };
	}

	const { id } = auth;

	const user = await User_Model?.findOne({ id });

	if (!user) {
		return { error: 'User could not be found' };
	}

	if (handicap < 0) {
		return { error: 'Handicap must be greater than zero' };
	}

	const old_handicap_object = {
		handicap: user.user?.handicap,
		date: user.user?.handicap_updated
	};

	user.handicap_history.push(old_handicap_object);

	if (user && user.user) {
		user.user.handicap = handicap;
		user.user.handicap_updated = new Date();
	}

	try {
		await user.save();
		return { handicap };
	} catch (err) {
		return { error: err as string };
	}
}
