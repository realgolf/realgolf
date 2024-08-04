import type { Cookies } from '@sveltejs/kit';
import { authenticate } from '../authenticate';
import { User_Model } from '../models';

/**
 * Changes the value of the animation property for a user.
 *
 * @param cookies - The cookies object containing the user's authentication token.
 * @param animation - The new value for the animation property.
 * @returns An object with the updated animation value or an error message.
 */
export async function change_animation(cookies: Cookies, animation: boolean) {
	const auth = authenticate(cookies);

	if (!auth) {
		return { error: 'You are not authenticated' };
	}

	const { id } = auth;

	const user = await User_Model?.findOne({ id });

	if (!user) {
		return { error: 'User could not be found' };
	}

	if (user && user.user) {
		user.user.animation = animation;
	}

	try {
		await user.save();
		return { animation };
	} catch (err) {
		return { error: err as string };
	}
}
