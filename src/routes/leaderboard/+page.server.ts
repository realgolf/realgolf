import { User_Model } from '$lib/server/user/models';
import { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event: any) => {
	try {
		let users = await User_Model.find()
			.sort({ 'one_player_precision_highscore.all_time.value': -1 })
			.exec();

		users = users.map((user) => {
			const userCopy = JSON.parse(JSON.stringify(user));
			delete userCopy._id; // Remove the _id field
			return userCopy;
		});

		if (!users) {
			return { status: 404, error: new Error('Users could not be found') };
		}

		users = users.filter((user) => user.deleted !== true);

		return { users };
	} catch (error) {
		return { status: 500, error: new Error('An unexpected error occurred') };
	}
};
