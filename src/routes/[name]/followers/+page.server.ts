import { User_Model } from '$lib/server/user/models';
import type { Followers } from '$lib/server/user/types';
import { serializeNonPOJOs } from '$lib/shared/utils/serializeNonPOJOs';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async (event) => {
	const param_name: string = event.params.name;

	const user = await User_Model?.findOne({
		'user.username': { $regex: new RegExp(param_name, 'i') }
	});

	const username = user?.user?.username;
	const name = user?.user?.name;
	const followers: Followers = serializeNonPOJOs(user?.user?.followers as object);
	const bio = user?.user?.bio;

	type Follower_Details = {
		name: string | null | undefined;
		bio: string | null | undefined;
		username: string | null | undefined;
	};

	const followerDetails: Follower_Details[] = [];

	for (const follower of followers.list) {
		const followerUser = await User_Model?.findOne({
			'user.username': follower.username
		});
		const followerName = followerUser?.user?.name;
		const followerBio = followerUser?.user?.bio;
		const followerUsername = followerUser?.user?.username;

		followerDetails.push({ name: followerName, bio: followerBio, username: followerUsername });
	}

	return { username, bio, name, followers, followerDetails, deleted: user.deleted };
};
