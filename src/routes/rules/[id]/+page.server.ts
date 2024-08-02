import { Rule_Model } from '$lib/server/rules/models';
import { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const id = event.params.id;

	let rules = await Rule_Model.find();

	if (!rules) {
		return { status: 404, error: new Error('Rule could not be found') };
	}

	rules = rules.map((rule) => {
		const ruleCopy = JSON.parse(JSON.stringify(rule));
		delete ruleCopy._id; // Remove the _id field
		return ruleCopy;
	});

	const rule = rules.find((rule) => rule.id === id);

	return { rule };
};
