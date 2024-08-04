import type { Cookies } from '@sveltejs/kit';
import { authenticate } from '../authenticate';
import { User_Model } from '../models';

/**
 * Changes the measurement unit for a user.
 *
 * @param cookies - The cookies object containing the user's authentication token.
 * @param measurement_unit - The new measurement unit to set for the user.
 * @returns An object with the updated measurement unit or an error message.
 */
export async function change_measurement(cookies: Cookies, measurement_unit: string) {
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
		user.user.measurement_units = measurement_unit;
	}

	try {
		await user.save();
		return { measurement_unit };
	} catch (err) {
		return { error: err as string };
	}
}
