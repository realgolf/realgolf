import { asign_role_data } from '$lib/scripts/Public/asign_role_data';
import { displayEmailPublic } from '$lib/scripts/Public/display_email_public';
import { editStatus } from '$lib/scripts/Public/edit_status';
import { extractMentions } from '$lib/scripts/Public/extract_mentions';
import { updateBio } from '$lib/scripts/Public/update_bio';
import { updateSocials } from '$lib/scripts/Public/update_socials';
import { User_Model } from '$lib/server/user/models';
import type { Followers, Following, Status, User } from '$lib/server/user/types';
import { serializeNonPOJOs } from '$lib/shared/utils/serializeNonPOJOs';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const param_name: string = event.params.name;

	const user = await User_Model?.findOne({
		'user.username': { $regex: new RegExp(param_name, 'i') }
	});

	if (!user) {
		return { status: 404, error: 'User could not be found' };
	}

	const cookie_username = event.cookies.get('username');

	const cookie_user = await User_Model?.findOne({ 'user.username': cookie_username });

	let sameUser: boolean;

	if (!user) {
		return { status: 404, error: 'User could not be found' };
	}

	if (cookie_username === user.user?.username) {
		sameUser = true;
	} else {
		sameUser = false;
	}

	function replaceMentionsWithLinks(
		bio: string | null | undefined,
		mentions: string[] | null | undefined[]
	): string | undefined {
		let modifiedBio = bio;

		if (modifiedBio && mentions) {
			mentions.forEach((mention) => {
				const mentionRegex = new RegExp(`@${mention}(?=[ ,.!?:;"§$%&/()=*+'#-_]|$)`, 'g');
				const newBio = modifiedBio?.replace(
					mentionRegex,
					`<a class="user-mention" href="/${mention}">@${mention}</a>`
				);
				modifiedBio = newBio;
			});
		}

		return modifiedBio;
	}

	const user_name = user.user?.name;
	const user_email = user.user?.email;
	const user_email_public = user.user?.email_public;
	const user_username = user.user?.username;
	const user_registration_date = user.user?.registration_date;
	const user_last_login_date = user.user?.last_login_date;
	const user_handicap = user.user?.handicap;
	const user_one_player_precision_highscore = user.one_player_precision_highscore;
	const user_games = user.games;
	const edit_bio = user.user?.bio;
	let user_bio: string | null | undefined = user.user?.bio;

	const mentions = extractMentions(user_bio);

	if (mentions.length > 0) {
		user_bio = replaceMentionsWithLinks(user_bio, mentions);
	}

	const total_games = user.total_games;
	const pronoun = user.user?.pronoun;
	const custom_pronoun = user.user?.custom_pronoun;

	const user_daily = {
		value: user_one_player_precision_highscore?.daily?.value,
		lastUpdated: user_one_player_precision_highscore?.daily?.lastUpdated
	};

	const user_weekly = {
		value: user_one_player_precision_highscore?.weekly?.value,
		lastUpdated: user_one_player_precision_highscore?.weekly?.lastUpdated
	};

	const user_monthly = {
		value: user_one_player_precision_highscore?.monthly?.value,
		lastUpdated: user_one_player_precision_highscore?.monthly?.lastUpdated
	};

	const user_yearly = {
		value: user_one_player_precision_highscore?.yearly?.value,
		lastUpdated: user_one_player_precision_highscore?.yearly?.lastUpdated
	};

	const user_all_time = {
		value: user_one_player_precision_highscore?.all_time?.value,
		lastUpdated: user_one_player_precision_highscore?.all_time?.lastUpdated
	};

	const games = user_games.map((game) => {
		const gameCopy = JSON.parse(JSON.stringify(game));
		delete gameCopy._id; // Remove the _id field
		return gameCopy;
	});

	const badges = user.user?.badges.map((badge) => {
		const badgeCopy = JSON.parse(JSON.stringify(badge));
		delete badgeCopy._id; // Remove the _id field
		return badgeCopy;
	});

	const achievements = user.achievements.map((achievement) => {
		const achievementCopy = JSON.parse(JSON.stringify(achievement));
		delete achievementCopy._id; // Remove the _id field
		return achievementCopy;
	});

	const socials = user.user?.socials.map((social) => {
		const socialCopy = JSON.parse(JSON.stringify(social));
		delete socialCopy._id;
		return socialCopy;
	});

	const user_status: Status = serializeNonPOJOs(user.user?.status as object);
	const followers: Followers = serializeNonPOJOs(user.user?.followers as object);
	const following: Following = serializeNonPOJOs(user.user?.following as object);
	const serialiezed_cookie_user: User = serializeNonPOJOs(cookie_user as object);
	const role = user.user?.role;
	const user_role_data = asign_role_data(role);
	const verified = user.user?.verified;

	return {
		param_name,
		user_name,
		user_username,
		user_email,
		user_email_public,
		user_registration_date,
		user_last_login_date,
		user_handicap,
		user_daily,
		user_weekly,
		user_monthly,
		user_yearly,
		user_all_time,
		games,
		user_bio,
		edit_bio,
		sameUser,
		badges,
		achievements,
		total_games,
		socials,
		pronoun,
		custom_pronoun,
		user_status,
		followers,
		following,
		serialiezed_cookie_user,
		user_role_data,
		verified,
		deleted: user.deleted
	};
};

export const actions: Actions = {
	edit_profile: async (event) => {
		const email = event.cookies.get('email') as string;
		const data = await event.request.formData();
		const bio = data.get('bio') as string;
		const socials_input = data.get('socials') as string;
		const socials_input_cleaned = socials_input.replace(/\r/g, '');
		const email_public = data.get('email_public') === 'on';
		const user = await User_Model?.findOne({ 'user.email': email });
		const pronoun = data.get('pronoun') as string;
		const custom_pronoun = data.get('custom_pronoun') as string;
		const status_text = data.get('status_text') as string;
		const status_emoji = data.get('status_emoji') as string;
		const busy = data.get('busy') === 'on';
		const username = user?.user?.username;

		if (user?.user) {
			if (pronoun === 'custom') {
				user.user.pronoun = pronoun;
				user.user.custom_pronoun = custom_pronoun;
			} else {
				user.user.pronoun = pronoun;
			}
			await user.save();
		}

		editStatus(email, status_text, busy, status_emoji);
		updateSocials(email, socials_input_cleaned);
		displayEmailPublic(email, email_public);
		updateBio(email, bio);
		throw redirect(301, `/${username}`);
	},
	follow: async (event) => {
		const email = event.cookies.get('email') as string;
		const username = event.params.name;
		const user = await User_Model?.findOne({ 'user.email': email });
		const user_to_follow = await User_Model?.findOne({ 'user.username': username });

		const user_username = user?.user?.username;

		if (
			user?.user &&
			user_to_follow?.user &&
			user.user.following &&
			user_to_follow.user.followers
		) {
			user.user.following.count += 1;
			user.user.following.list.push({ username: username });
			user_to_follow.user.followers.count += 1;
			user_to_follow.user.followers.list.push({ username: user_username });
			await user.save();
			await user_to_follow.save();
			throw redirect(301, `/${username}`);
		}
	},
	unfollow: async (event) => {
		const email = event.cookies.get('email') as string;
		const username = event.params.name;
		const user = await User_Model?.findOne({ 'user.email': email });
		const user_to_unfollow = await User_Model?.findOne({ 'user.username': username });

		const user_username = user?.user?.username;

		if (
			user?.user &&
			user_to_unfollow?.user &&
			user.user.following &&
			user_to_unfollow.user.followers
		) {
			user.user.following.count -= 1;
			/* eslint-disable */
			user.user.following.list = user.user.following.list.filter(
				(following) => following.username !== username
			) as any;
			user_to_unfollow.user.followers.count -= 1;
			user_to_unfollow.user.followers.list = user_to_unfollow.user.followers.list.filter(
				(follower) => follower.username !== user_username
			) as any;
			/* eslint-enable */
			await user.save();
			await user_to_unfollow.save();
			throw redirect(301, `/${username}`);
		}
	}
};
