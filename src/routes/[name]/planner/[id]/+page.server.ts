import { updateVisitCount } from '$lib/scripts/Planner/updateVisitCount';
import { User_Model } from '$lib/server/user/models';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const visitorEmail = event.cookies.get('email');
	const param_name: string = event.params.name;
	const id: string = event.params.id;

	const owner = await User_Model?.findOne({
		'user.username': { $regex: new RegExp(param_name, 'i') }
	});

	const visitor = await User_Model?.findOne({ 'user.email': visitorEmail });

	if (!owner) {
		return { status: 404, error: 'User could not be found' };
	}

	if (!visitor) {
		return { status: 404, error: 'Visitor could not be found' };
	}

	const username = owner.user?.username;
	const email = owner.user?.email;

	const visitor_username = visitor.user?.username;

	const currentPlanner = owner?.planners.find((planner) => planner.id === id);

	if (!currentPlanner) {
		return {
			status: 404,
			body: {
				error: 'Planner not found'
			}
		};
	}

	// Check if the stargazer's username already exists in the list
	const existingStargazerIndex =
		currentPlanner.stars?.list.findIndex((visitor) => visitor.username === visitor_username) ?? -1;

	let visitor_has_starred = false;

	if (existingStargazerIndex !== -1) {
		visitor_has_starred = true;
	}

	if (email) {
		await updateVisitCount(email, id);
	}

	const title = currentPlanner.title;
	const description = currentPlanner.description;
	const dateOfCreation = currentPlanner.dateOfCreation;
	const dateOfLastEdit = currentPlanner.dateOfLastEdit;
	const comment = currentPlanner.comment;
	const visits = currentPlanner.visits;
	const edits = currentPlanner.edits;
	const stars = currentPlanner.stars?.count;

	return {
		id,
		title,
		description,
		dateOfCreation,
		dateOfLastEdit,
		comment,
		visits,
		edits,
		username,
		visitor_has_starred,
		stars
	};
};

export const actions: Actions = {
	default: async (event) => {
		const stargazers_email = event.cookies.get('email');
		const owner_username = event.params.name;
		const id = event.params.id;

		const data = await event.request.formData();
		const star = data.get('star') as string;

		const owner = await User_Model?.findOne({ 'user.username': owner_username });
		const stargazers = await User_Model?.findOne({ 'user.email': stargazers_email });

		if (!owner || !stargazers) {
			return {
				status: 404,
				body: {
					error: 'User not found'
				}
			};
		}

		const stargazers_username = stargazers.user?.username;
		const currentPlanner = owner?.planners.find((planner) => planner.id === id);

		if (!currentPlanner) {
			return {
				status: 404,
				body: {
					error: 'Planner not found'
				}
			};
		}

		if (star === 'star') {
			// Check if the stargazer's username already exists in the list
			const existingStargazerIndex =
				currentPlanner.stars?.list.findIndex(
					(stargazer) => stargazer.username === stargazers_username
				) ?? -1;

			if (currentPlanner.stars) {
				if (existingStargazerIndex === -1) {
					// Stargazer not found, add to the list and update count
					currentPlanner.stars?.list.push({ username: stargazers_username });
					currentPlanner.stars.count += 1;
				} else {
					// Stargazer found, remove from the list and update count
					currentPlanner.stars?.list.splice(existingStargazerIndex, 1);
					currentPlanner.stars.count -= 1;
				}
			}

			await owner.save();
		}
	}
};
