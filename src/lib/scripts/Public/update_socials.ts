import { User_Model } from '$lib/server/user/models';

/**
 * Update the socials of a user in the database
 * @param email - The email of the user
 * @param socials_input_cleaned - The socials to update
 */
export async function updateSocials(email: string, socials_input_cleaned: string | undefined) {
	const user = await User_Model?.findOne({ 'user.email': email });
	if (user?.user && socials_input_cleaned) {
		const socials_array = socials_input_cleaned.split('\n').filter((social) => social.length > 0);

		user.user.socials = socials_array;
		await user.save();
	}
}
