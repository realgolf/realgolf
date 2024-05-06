import { User_Model } from '$lib/server/user/models';

/**
 * Update the bio of a user
 * @param {string} email - The email of the user
 * @param {string} bio - The bio to update
 * @returns
 */
export async function updateBio(email: string, bio: string | undefined) {
	const user = await User_Model?.findOne({ 'user.email': email });
	if (user?.user) {
		if (user.user.bio !== bio) {
			user.user.bio = bio;
		} else {
			return {
				status: 500,
				error: "The Bio didn't get modified!"
			};
		}
		await user.save();
	}
}
