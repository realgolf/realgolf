import { User_Model } from './models';

export async function checkEmailExists(email: string): Promise<string> {
	console.log('testing email', email);

	const user = await User_Model?.findOne({ 'user.email': email });

	if (!user) {
		return 'No User with this email exists';
	}

	return '';
}
