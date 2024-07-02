import { asign_role_data } from '$lib/scripts/Public/asign_role_data';
import { User_Model } from '$lib/server/user/models';
import type { PageServerLoad } from '../$types';
import { Actions } from './$types';

export const load: PageServerLoad = async (event: {
	cookies: { get: (arg0: string) => unknown };
}) => {
	const username = event.cookies.get('username');

	const user = await User_Model?.findOne({ 'user.username': username });
	let role_data;

	if (user && user.user) {
		const role = user.user.role;

		role_data = asign_role_data(role);
	}

	return { username, role_data };
};

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const message = JSON.parse(data.get('message') as string);

		console.log('message', message);

		// const chat = new Chat_Model({
		// 	author: message.author,
		// 	bot: message.bot,
		// 	message_type: message.message_type,
		// 	text: message.text
		// });

		// await chat.save();
	}
};
