import { updateVisitCount } from '$lib/scripts/Planner/updateVisitCount';
import { User_Model } from '$lib/server/user/models';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

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

	await updateVisitCount(email, id);

	// Check if the stargazer's username already exists in the list
	const existingStargazerIndex =
		currentPlanner.stars?.list.findIndex((visitor) => visitor.username === user.user?.username) ??
		-1;

	let person_has_starred = false;

	if (existingStargazerIndex !== -1) {
		person_has_starred = true;
	}

	const title = currentPlanner.title;
	const description = currentPlanner.description;
	const dateOfCreation = currentPlanner.dateOfCreation;
	const dateOfLastEdit = currentPlanner.dateOfLastEdit;
	const comment = currentPlanner.comment;
	const visits = currentPlanner.visits;
	const edits = currentPlanner.edits;
	const stars = currentPlanner.stars.count;
	const username = user.user.username;
	const done = currentPlanner.done;
	const todos = currentPlanner.todos.map((todo) => {
		const todoCopy = JSON.parse(JSON.stringify(todo));
		delete todoCopy._id;
		return todoCopy;
	});

	return {
		id,
		title,
		description,
		dateOfCreation,
		dateOfLastEdit,
		comment,
		visits,
		edits,
		stars,
		username,
		todos,
		done,
		person_has_starred
	};
};

export const actions: Actions = {
	done: async (event) => {
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

		const currentPlanner = user.planners.find((planner) => planner.id === id);

		if (!currentPlanner) {
			return {
				status: 404,
				body: {
					error: 'Planner not found'
				}
			};
		}

		if (currentPlanner.done == true) {
			currentPlanner.done = false;
		} else {
			currentPlanner.done = true;
		}

		await user.save();
	},
	delete: async (event) => {
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

		const currentPlannerIndex = user.planners.findIndex((planner) => planner.id === id);

		if (currentPlannerIndex === -1) {
			return {
				status: 404,
				body: {
					error: 'Planner not found'
				}
			};
		}

		user.planners.splice(currentPlannerIndex, 1);

		await user.save();
		throw redirect(303, '/dashboard/planner');
	},
	star: async (event) => {
		const email = event.cookies.get('email');
		const id = event.params.id;

		const data = await event.request.formData();
		const star = data.get('star') as string;

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

		if (star === 'star' && user.user) {
			// Check if the stargazer's username already exists in the list
			const existingStargazerIndex =
				currentPlanner.stars?.list.findIndex(
					(stargazer) => stargazer.username === user.user.username
				) ?? -1;

			if (currentPlanner.stars) {
				if (existingStargazerIndex === -1) {
					// Stargazer not found, add to the list and update count
					currentPlanner.stars?.list.push({ username: user.user.username });
					currentPlanner.stars.count += 1;
				} else {
					// Stargazer found, remove from the list and update count
					currentPlanner.stars?.list.splice(existingStargazerIndex, 1);
					currentPlanner.stars.count -= 1;
				}
			}

			await user.save();
		}
	}
};
