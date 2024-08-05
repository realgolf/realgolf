import { User_Model } from '$lib/server/user/models';
import { Actions } from '@sveltejs/kit';
import { PageServerLoad } from './$types';

type Club = {
	name: string;
	distance: number;
};

type Club = {
	name: string | null;
	distance: number | null;
};

export const load: PageServerLoad = async (event) => {
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

	if (!user.clubs || user.clubs.length === 0) {
		return {
			status: 404,
			body: {
				error: 'Clubs not found'
			}
		};
	} else {
		const clubs = user.clubs.map((club: Club) => {
			const clubCopy = JSON.parse(JSON.stringify(club));
			delete clubCopy._id;
			return clubCopy;
		});

		return { clubs };
	}
};

export const actions: Actions = {
	default: async (event) => {
		const email = event.cookies.get('email');
		const data = await event.request.formData();
		const clubs = data.get('clubs') as string;
		const clubsArray = JSON.parse(clubs);

		const user = await User_Model.findOne({ 'user.email': email });

		if (!user) {
			return {
				status: 404,
				body: {
					error: 'User not found'
				}
			};
		}

		user.clubs = clubsArray;

		try {
			await user.save();
		} catch (error) {
			console.log(error);
		}
	}
};
