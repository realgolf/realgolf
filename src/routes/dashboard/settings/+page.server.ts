import { change_animation } from '$lib/server/user/account/change_animation';
import { change_email } from '$lib/server/user/account/change_email';
import { change_handicap } from '$lib/server/user/account/change_handicap';
import { change_name } from '$lib/server/user/account/change_name';
import { change_password } from '$lib/server/user/account/change_password';
import { change_rounded_corners } from '$lib/server/user/account/change_rounded_corners';
import { change_theme } from '$lib/server/user/account/change_theme';
import { change_two_factor_auth } from '$lib/server/user/account/change_two_factor_auth';
import { delete_account } from '$lib/server/user/account/delete_account';
import { change_measurement } from '$lib/server/user/account/hange_measurement';
import { User_Model } from '$lib/server/user/models';
import { cookie_options } from '$lib/server/user/utils';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { Types } from 'mongoose';
import type { PageServerLoad } from '../$types';

interface HandicapHistory {
	date: Date | null | undefined;
	handicap: number | null | undefined;
}

export const load: PageServerLoad = async (event) => {
	const email = event.cookies.get('email');

	const user = await User_Model?.findOne({ 'user.email': email });

	const measurement_unit = user?.user?.measurement_units as string;
	const theme = user?.user?.theme as string;
	const rounded_corners = user?.user?.rounded_corners as boolean;
	const handicap = user?.user?.handicap as number;
	const handicap_updated = user?.user?.handicap_updated as Date;
	const id = user?.id as string;
	const two_factor_auth = user?.user?.two_factor_auth as boolean;

	const handicap_history = user?.handicap_history.map((history) => {
		const historyCopy = JSON.parse(JSON.stringify(history));
		delete historyCopy._id; // Remove the _id field
		return historyCopy;
	});

	return {
		measurement_unit,
		id,
		theme,
		rounded_corners,
		handicap,
		handicap_updated,
		handicap_history,
		two_factor_auth
	};
};

export const actions: Actions = {
	name: async (event) => {
		const data = await event.request.formData();
		const name = (data.get('name') as string)?.trim();
		const update = await change_name(event.cookies, name);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		event.cookies.set('name', name, cookie_options);

		const message = `Your new name is ${name}`;

		return { name, message };
	},
	email: async (event) => {
		const data = await event.request.formData();
		const email = (data.get('email') as string)?.toLowerCase()?.trim();
		const update = await change_email(event.cookies, email);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		event.cookies.set('email', email, cookie_options);

		const message = `Your new email is ${email}`;

		return { email, message };
	},
	password: async (event) => {
		const data = await event.request.formData();
		const current_password = data.get('current_password') as string;
		const new_password = data.get('new_password') as string;
		const verified_password = data.get('confirm_password') as string;
		const update = await change_password(
			event.cookies,
			current_password,
			new_password,
			verified_password
		);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		const message = `Your password got changed`;

		return { message };
	},
	measurement: async (event) => {
		const data = await event.request.formData();
		const measurement_unit = data.get('measurement-unit') as string;

		const update = await change_measurement(event.cookies, measurement_unit);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		const message = `Your measurement unit got changed`;

		return { message, measurement_unit };
	},
	theme: async (event) => {
		const data = await event.request.formData();
		const theme_settings = data.get('theme-settings') as string;

		const update = await change_theme(event.cookies, theme_settings);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		const message = `Your theme settings got changed`;

		return { message, theme_settings };
	},
	delete_account: async (event) => {
		const data = await event.request.formData();
		const password = data.get('password_delete_account') as string;

		const update = await delete_account(event.cookies, password);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		if (update.account_deleted) {
			throw redirect(301, '/logout');
		}

		const message = update.message;

		return { message };
	},
	handicap: async (event) => {
		const data = await event.request.formData();
		const handicap = data.get('handicap') as unknown as number;

		const update = await change_handicap(event.cookies, handicap);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		const message = `Your Handicap settings got changed`;

		return { message, handicap };
	},
	clear_handicap_history: async (event) => {
		const email = event.cookies.get('email');

		try {
			const user = await User_Model?.findOne({ 'user.email': email });

			if (!user) {
				return {
					status: 404,
					error: 'User not found'
				};
			}

			if (user) {
				user.handicap_history = [] as unknown as Types.DocumentArray<HandicapHistory>;
			}

			await user?.save();
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				error: 'Error deleting History'
			};
		}
	},
	rounded_corners: async (event) => {
		const data = await event.request.formData();
		const rounded_corners = !!data.get('rounded-corners');

		const update = await change_rounded_corners(event.cookies, rounded_corners);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		const message = `Your rounded corners settings got changed`;

		return { message, rounded_corners };
	},
	animation: async (event) => {
		const data = await event.request.formData();
		const animation = !!data.get('animation');

		const update = await change_animation(event.cookies, animation);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		const message = `Your animation settings got changed`;

		return { message, animation };
	},
	two_factor: async (event) => {
		const data = await event.request.formData();
		const two_factor_auth = !data.get('two-factor-auth');

		console.log(two_factor_auth);

		const update = await change_two_factor_auth(event.cookies, two_factor_auth);

		if ('error' in update) {
			return fail(400, { error: update.error });
		}

		const message = `Your two factor authentication settings got changed`;

		return { message, two_factor_auth };
	}
};
