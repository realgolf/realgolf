import { SECRET_JWT_KEY } from '$env/static/private';
import { User_Model } from '$lib/server/user/models';
import { cookie_options } from '$lib/server/user/utils';
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
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
	default: async (event) => {
		const params = event.params;
		const email = event.cookies.get('email');
		const user = await User_Model.findOne({ 'user.email': email });
		const data = await event.request.formData();
		const entered_verification_code = data.get('verification_code')?.toString();
		const expirationDate = event.url.searchParams.get('expirationDate');

		if (!email) {
			return { status: 400, body: { error: 'Email could not be found.' } };
		}

		if (!user) {
			return { status: 400, body: { error: 'User could not be found.' } };
		}

		if (!entered_verification_code) {
			return { status: 400, body: { error: 'Verification code is required.' } };
		}

		if (expirationDate) {
			const expiration = new Date(expirationDate);

			if (expiration < new Date()) {
				return { status: 400, body: { error: 'Verification code has expired.' } };
			}

			const pos = user.user?.two_factor_auth_codes?.findIndex((code) => {
				if (code.date) {
					// Create Date objects from the code date and expiration date
					const codeDate = new Date(code.date);
					const expirationDateObj = new Date(expirationDate);

					// Convert both dates to UTC and remove milliseconds
					codeDate.setUTCSeconds(0, 0);
					expirationDateObj.setUTCSeconds(0, 0);

					console.log(
						'Normalized codeDate:',
						codeDate.toISOString(),
						'Normalized expirationDateObj:',
						expirationDateObj.toISOString()
					);

					// Compare the normalized UTC dates
					return codeDate.toISOString() === expirationDateObj.toISOString();
				} else {
					console.log('Date could not be found in code:', code);
					return false; // Explicitly return false if no date found
				}
			});

			if (pos !== undefined && pos !== -1) {
				const verification_code = user.user?.two_factor_auth_codes[pos]?.code?.toString();

				if (entered_verification_code && verification_code) {
					if (verification_code !== entered_verification_code) {
						return { status: 400, body: { error: 'Verification code does not match.' } };
					} else {
						if (user.user) user.user.two_factor_auth_codes.splice(pos, 1);
						await user.save();

						const token = jwt.sign({ id: user.id }, SECRET_JWT_KEY);

						event.cookies.set('auth-token', token, cookie_options);

						let redirectURL: string = event.url.searchParams.get('redirect') ?? '/dashboard';

						if (redirectURL == 'null' || redirectURL == null) {
							redirectURL = '/dashboard';
						} else {
							redirectURL = event.url.searchParams.get('redirect') ?? '/dashboard';
						}

						throw redirect(303, redirectURL);
					}
				} else {
					return { status: 400, body: { error: 'Verification code could not be verified.' } };
				}
			} else {
				console.log('pos', pos);
				return { status: 400, body: { error: 'Verification code not found.' } };
			}
		} else {
			return { status: 400, body: { error: 'Expiration date is required.' } };
		}
	}
};
