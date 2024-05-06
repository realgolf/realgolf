import { User_Model } from '$lib/server/user/models';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event): Promise<unknown> => {
	const email = event.cookies.get('email');

	const user = await User_Model?.findOne({ 'user.email': email });

	const name = user?.user?.name as string;
	const handicap = user?.user?.handicap as number;

	return { name, handicap };
};
