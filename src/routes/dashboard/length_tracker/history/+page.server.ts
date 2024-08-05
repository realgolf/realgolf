import { User_Model } from '$lib/server/user/models';
import { PageServerLoad } from './$types';

type Club_History = {
	name: string;
	distance: number;
};

export const load: PageServerLoad = async (event: { cookies: { get: (arg0: string) => any } }) => {
	const email = event.cookies.get('email');
	if (!email) {
		return {
			status: 400,
			body: {
				error: 'Email not provided'
			}
		};
	}

	const user = await User_Model?.findOne({ 'user.email': email });

	if (!user) {
		return {
			status: 404,
			body: {
				error: 'User not found'
			}
		};
	}

	if (!user.clubs_history || user.clubs_history.length === 0) {
		return {
			status: 404,
			body: {
				error: 'Clubs history not found'
			}
		};
	} else {
		const clubs_history = user.clubs_history.map((club_history: Club_History) => {
			const club_historyCopy = JSON.parse(JSON.stringify(club_history));
			delete club_historyCopy._id;
			return club_historyCopy;
		});

		return { clubs_history };
	}
};
