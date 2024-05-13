import { User_Model } from '$lib/server/user/models';
import type { Todo } from '$lib/types/planner';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const email = event.cookies.get('email');
	const id = event.params.id;

	const user = await User_Model?.findOne({ 'user.email': email });

	if (!user) {
		return {
			status: 404,
			body: {
				error: 'User not found'
			}
		};
	}

	const currentPlanner = user?.planners.find((planner) => planner.id === id);

	if (!currentPlanner) {
		return {
			status: 404,
			body: {
				error: 'Planner not found'
			}
		};
	}

	const title = currentPlanner.title;
	const description = currentPlanner.description;
	const dateOfCreation = currentPlanner.dateOfCreation;
	const dateOfLastEdit = currentPlanner.dateOfLastEdit;
	const comment = currentPlanner.comment;
	const todos = currentPlanner.todos.map((todo) => {
		const todoCopy = JSON.parse(JSON.stringify(todo));
		delete todoCopy._id;
		return todoCopy;
	});

	return { id, title, description, dateOfCreation, dateOfLastEdit, comment, todos };
};

export const actions: Actions = {
	edit: async (event) => {
		const email = event.cookies.get('email');
		const id = event.params.id;
		const data = await event.request.formData();
		const title = data.get('title') as string;
		const description = data.get('description') as string;
		const comment = data.get('comment') as string;
		const dateOfLastEdit = new Date();

		// Extract todos from FormData
		const todos: Todo[] = [];

		data.forEach((value, key) => {
			if (key.startsWith('task_')) {
				const index = Number(key.split('_')[1]);
				const task = value as string;
				const done = data.get(`done_${index}`) === 'on';
				const priority = Number(data.get(`priority_${index}`));
				const id = data.get(`id_${index}`) as string;
				todos.push({ task, done, priority, id });
			}
		});

		const user = await User_Model?.findOne({ 'user.email': email });

		if (!user) {
			return {
				status: 404,
				body: {
					error: 'User not found'
				}
			};
		}

		const currentPlanner = user?.planners.find((planner) => planner.id === id);

		if (!currentPlanner) {
			return {
				status: 404,
				body: {
					error: 'Planner not found'
				}
			};
		}

		currentPlanner.title = title;
		currentPlanner.description = description;
		currentPlanner.comment = comment;
		currentPlanner.dateOfLastEdit = dateOfLastEdit;
		currentPlanner.edits += 1;
		currentPlanner.todos = todos;

		await user.save();
		throw redirect(303, `/dashboard/planner/${id}`);
	}
};
