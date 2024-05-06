import { connect_to_db } from '$lib/server/user/db';
import { User_Model } from '$lib/server/user/models';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event: {
	cookies: { get: (arg0: string) => string | undefined };
}) => {
	const connection = await connect_to_db();
	if (!connection) {
		console.error('Database connection failed');
		throw error(500, 'Database connection failed');
	}

	const auth = event.cookies.get('auth-token');

	const name = event.cookies.get('name') ?? '';
	const email = event.cookies.get('email') ?? '';
	const username = event.cookies.get('username') ?? '';

	const user = await User_Model?.findOne({ 'user.email': email });

	// await deleteOldUsersIfNeeded();

	const database_all_users = await User_Model?.find({});
	let all_users = [];
	if (database_all_users !== undefined && database_all_users !== null) {
		all_users = database_all_users.map((user) => {
			const usersCopy = JSON.parse(JSON.stringify(user));
			delete usersCopy._id; // Remove the _id field
			return usersCopy;
		});
	}

	if (!user) {
		return {
			status: 404,
			error: 'User not found'
		};
	}

	const theme = user.user?.theme;
	const rounded_corners = user.user?.rounded_corners;
	const animation = user.user?.animation;

	return { all_users, name, email, auth, theme, rounded_corners, animation, username };
};
