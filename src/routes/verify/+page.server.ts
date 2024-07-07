import { User_Model } from '$lib/server/user/models';
import { redirect } from '@sveltejs/kit';
import { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const email = event.cookies.get('email');

	if (!email) {
		return { status: 400, body: { error: 'Email could not be found.' } };
	}

	const user = await User_Model.findOne({ 'user.email': email });

	if (!user) {
		return { status: 400, body: { error: 'User could not be found.' } };
	}

	const name = user?.user?.name ?? '';

	return { name };
};

export const actions: Actions = {
	verify: async (event) => {
		const email = event.cookies.get('email');
		const user = await User_Model.findOne({ 'user.email': email });
		const data = await event.request.formData();
		const entered_verification_code = data.get('verification_code')?.toString();

		if (!email) {
			return { status: 400, body: { error: 'Email could not be found.' } };
		}

		if (!user) {
			return { status: 400, body: { error: 'User could not be found.' } };
		}

		if (user.user && user.user.verified) {
			throw redirect(303, '/dashboard');
		}

		if (!entered_verification_code) {
			return { status: 400, body: { error: 'Verification code is required.' } };
		}

		const verification_code = user?.user?.verification_code?.toString();

		console.log(entered_verification_code, verification_code);

		if (entered_verification_code && verification_code) {
			if (verification_code !== entered_verification_code) {
				return { status: 400, body: { error: 'Verification code does not match.' } };
			} else {
				if (user.user) user.user.verified = true;
				await user.save();

				throw redirect(303, '/dashboard');
			}
		}
	}
};
