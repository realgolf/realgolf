import { User_Model } from '$lib/server/user/models';

/**
 * Lets the user edit their status
 * @param {string} email - The email of the user
 * @param {string} status_text - The status text to display
 * @param {boolean} busy - Whether the user is busy or not
 */
export async function editStatus(
	email: string,
	status_text: string,
	busy: boolean,
	status_emoji: string
) {
	const user = await User_Model?.findOne({ 'user.email': email });

	if (user?.user?.status) {
		user.user.status.text = status_text;
		user.user.status.emoji = status_emoji;
		user.user.status.busy = busy;
		await user.save();
	}
}
