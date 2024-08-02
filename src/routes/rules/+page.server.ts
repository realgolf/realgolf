import { Rule_Model } from '$lib/server/rules/models';
import { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	let rules = await Rule_Model.find().sort({ _id: 1 });

	if (!rules) {
		return { status: 404, error: 'No rules found' };
	}

	rules = rules.map((rule) => {
		const ruleCopy = JSON.parse(JSON.stringify(rule));
		delete ruleCopy._id;
		return ruleCopy;
	});

	return { rules };
};
