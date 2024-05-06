import { User_Model } from '$lib/server/user/models';

/**
 * Lets the user choose whether to display their email publicly or privately
 * @param email The email to display
 * @param email_public Whether to display the email publicly or privately
 */
export async function displayEmailPublic(email: string, email_public: boolean) {
	const user = await User_Model?.findOne({ 'user.email': email });
	if (user?.user && (user.user.email_public === false || user.user.email_public === true)) {
		user.user.email_public = email_public;
		await user.save();
	}
}
