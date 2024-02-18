import { User_Model } from '../models';
import { email_regexp } from '../utils';

export async function verify_email(email: string): Promise<string> {
	if (!email) {
		return 'Email is required.';
	}

	if (!email.match(email_regexp)) {
		return 'Please enter a valid email.';
	}

	const previous_user = await User_Model?.findOne({ 'user.email': email });

	if (previous_user) {
		return 'There is already an account with this email.';
	}

	return '';
}
