import { SECRET_JWT_KEY } from '$env/static/private';
import { transporter } from '$lib/scripts/email/transporter';
import { generate_verification_code } from '$lib/shared/utils/generateVerificationCode';
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { get_user } from './login/get_user';
import { User_Model } from './models';
import { cookie_options } from './utils';

/**
 * Logs in a user with the provided email and password.
 * @param email - The email of the user.
 * @param password - The password of the user.
 * @returns An object containing the JWT token and the user information if the login is successful, or an error object if there is an error.
 */
export async function login_user(email: string, password: string, event: any) {
	const user = await get_user(email, password);
	const currentDate = new Date();
	const expirationDate = new Date(currentDate.getTime() + 60 * 60 * 1000);
	const verification_code = generate_verification_code();

	if ('error' in user) {
		return { error: user.error };
	}

	const email_user = await User_Model.findOne({ 'user.email': email });

	if (!email_user) {
		return { error: 'User could not be found' };
	}

	if (email_user?.deleted) {
		return { error: 'User account is deleted' };
	}

	if (email_user?.user?.two_factor_auth == true) {
		email_user.user.last_login_date = new Date();
		email_user.user.two_factor_auth_codes.push({
			code: verification_code,
			date: expirationDate
		});

		await email_user.save();

		async function sendVerificationEmail() {
			try {
				// send mail with defined transport object
				const info = await transporter.sendMail({
					from: `"Support RealGolf.Games" <support@realgolf.games>`,
					to: `"${email_user?.user?.name}" <${email}>`,
					subject: `Verification code for RealGolf.Games login: ${email_user?.user?.username}`,
					html: `
							<p>Hello ${email_user?.user?.name}</p>
							</br>
							<p>You are trying to login into your RealGolf.Games Account</p>
							<p>Please use the following verification code to complete your login:</p>
							<p><b>${verification_code}</b></p>
							<br>
							<p>This code will expire in one hour. At ${expirationDate.toLocaleString()}</p>
							<br>
							<p>If you dind't initiate this login, we recommend securing your account by changing your password.</p>
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

		event.cookies.set('email', email, cookie_options);
		event.cookies.set('name', email_user?.user?.name ?? '', cookie_options);
		event.cookies.set('username', email_user?.user?.username ?? '', cookie_options);

		console.log('Expiration date:', expirationDate.toUTCString());
		const redirectURL = event.url.searchParams.get('redirect');
		throw redirect(
			303,
			'/login/verify?expirationDate=' + expirationDate.toUTCString() + '&redirect=' + redirectURL
		);
	} else {
		await User_Model?.updateOne(
			{ 'user.email': email },
			{ $set: { 'user.last_login_date': new Date() } }
		);

		const token = jwt.sign({ id: user.id }, SECRET_JWT_KEY);

		return { token, user };
	}
}
