import mongoose from 'mongoose';

const Game_Schema = new mongoose.Schema({
	id: { type: String },
	type: { type: String },
	owner: { type: String },
	site: { type: String },
	name: { type: String },
	teams: { type: String },
	date: { type: String },
	data: { type: String },
	is_over: { type: Boolean, default: false },
	comments: [
		{
			id: { type: String },
			username: { type: String },
			date: { type: Date },
			content: { type: String },
			reactions: [
				{
					emoji: { type: String },
					username: { type: String }
				}
			],
			replies: [
				{
					id: { type: String },
					username: { type: String },
					date: { type: Date },
					content: { type: String },
					reactions: [
						{
							emoji: { type: String },
							username: { type: String }
						}
					]
				}
			],
			edited: { type: Boolean, default: false }
		}
	]
});

export const Game_Model = mongoose.model('Game', Game_Schema);
