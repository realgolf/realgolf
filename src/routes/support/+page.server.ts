import { transporter } from '$lib/scripts/email/transporter';
import { checkEmailExists } from '$lib/server/user/email_exists';
import type { Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const name = data.get('name') as string;
		const email = (data.get('email') as string)?.toLowerCase()?.trim();
		const subject = data.get('subject') as string;
		const message = data.get('message') as string;
		const honeypot = data.get('honeypot') as string;

		if (honeypot !== '') {
			// If the honeypot field is not empty, it's likely a bot submission
			return {
				status: 400,
				body: { error: 'Possible spam submission detected' }
			};
		}

		console.log(name, email, subject, message);

		const emailExistsError = await checkEmailExists(email);

		if (emailExistsError) {
			console.error(emailExistsError);
			return {
				error: emailExistsError
			};
		}

		async function sendEmail() {
			try {
				// send mail with defined transport object
				const info = await transporter.sendMail({
					from: `"Support RealGolf" <support@realgolf.games>`,
					to: '"Support RealGolf" <support@realgolf.games>',
					subject: `${subject}`,
					html: `<p>${message}</p></br><p>From: ${name} (${email})</p>`
				});

				console.log('Message sent: %s', info.messageId);
				console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
			} catch (error) {
				console.error('Error sending email:', error);
			}
		}

		await sendEmail();
	}
};
