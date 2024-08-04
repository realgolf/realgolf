import mongoose from 'mongoose';

const RuleSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true },
	title: { type: String, required: true },
	content: { type: String, required: true },
	toc: {
		h2: [
			{
				id: { type: String, required: true },
				text: { type: String, required: true },
				h3: [
					{
						id: { type: String, required: true },
						text: { type: String, required: true }
					}
				]
			}
		]
	}
});

export const Rule_Model = mongoose.model('Rule', RuleSchema);
