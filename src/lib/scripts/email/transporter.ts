import { SECRET_EMAIL_PASSWORD } from '$env/static/private';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
	host: 'mail.privateemail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'support@realgolf.games',
		pass: `${SECRET_EMAIL_PASSWORD}`
	}
});
