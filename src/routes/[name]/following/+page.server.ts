import { User_Model } from '$lib/server/user/models';
import type { Following } from '$lib/server/user/types';
import { serializeNonPOJOs } from '$lib/shared/utils/serializeNonPOJOs';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async (event) => {
	const param_name: string = event.params.name;

	const user = await User_Model?.findOne({
		'user.username': { $regex: new RegExp(param_name, 'i') }
	});

	const username = user?.user?.username;
	const name = user?.user?.name;
	const followings: Following = serializeNonPOJOs(user?.user?.following as object);
	const bio = user?.user?.bio;

	type Following_Details = {
		name: string | null | undefined;
		bio: string | null | undefined;
		username: string | null | undefined;
	};

	const followingDetails: Following_Details[] = [];

	for (const following of followings.list) {
		const followingUser = await User_Model?.findOne({
			'user.username': following.username
		});
		const followingName = followingUser?.user?.name;
		const followingBio = followingUser?.user?.bio;
		const followingUsername = followingUser?.user?.username;

		followingDetails.push({ name: followingName, bio: followingBio, username: followingUsername });
	}

	return { username, bio, name, followings, followingDetails };
};
