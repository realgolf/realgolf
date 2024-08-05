import { transporter } from '$lib/scripts/email/transporter';
import { login_user } from '$lib/server/user/login';
import { register_user } from '$lib/server/user/register';
import { cookie_options } from '$lib/server/user/utils';
import { generate_verification_code } from '$lib/shared/utils/generateVerificationCode';
import { fail, redirect } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = (data.get('email') as string)?.toLowerCase()?.trim();
		const password = data.get('password') as string;
		const verified_password = data.get('password_verify') as string;
		const name = (data.get('name') as string)?.trim();
		const username = (data.get('username') as string).trim();
		const handicap = data.get('handicap') as unknown as number;
		const handicap_updated = new Date();
		const registration_date = new Date();
		const verification_code = generate_verification_code();

		const user = {
			email,
			name,
			username,
			handicap,
			handicap_updated,
			registration_date,
			verification_code
		};

		const { error } = await register_user(
			email,
			password,
			verified_password,
			name,
			username,
			handicap,
			handicap_updated,
			registration_date,
			verification_code
		);

		if (error) {
			return fail(400, { error, user });
		} else {
			const user_data = await login_user(email, password, event);

			if ('error' in user_data) {
				return fail(400, { email, error: user_data.error });
			} else {
				const { token, user } = user_data;

				event.cookies.set('auth-token', token, cookie_options);
				event.cookies.set('email', user.email, cookie_options);
				event.cookies.set('name', user.name, cookie_options);
				event.cookies.set('username', user.username, cookie_options);

				async function sendVerificationEmail() {
					try {
						// send mail with defined transport object
						const info = await transporter.sendMail({
							from: `"Support RealGolf.Games" <support@realgolf.games>`,
							to: `"${user.name}" <${user.email}>`,
							subject: `Verification code for RealGolf.Games registration: ${user.username}`,
							html: `
									<p>Welcome, ${user.name}!</p>
									<p>Thank you for registering with RealGolf.Games, we are excited to have you on board.</p>
									<br> 
									<p>Please use the following code to verify your email address:</p>
									</br>
									<p><b>${user.verification_code}</b></p>
									<br>
									<p>If you have any questions or concerns please reply directly to this email.</p>
									<br>
									<p>Kind regards,</p>
									<p>RealGolf.Games Team</p>
									<br>
									<small>© 2024 RealGolf.Games. All rights reserved.</small>
								`
						});

						console.log('Message sent: %s', info.messageId);
						console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
					} catch (error) {
						console.error('Error sending email:', error);
					}
				}

				await sendVerificationEmail();
				throw redirect(303, '/verify');
			}
		}
	}
};
