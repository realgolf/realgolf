import mongoose from 'mongoose';
import { connect_to_db } from './db';

const Game_Schema = new mongoose.Schema({
	id: { type: String },
	type: { type: String },
	owner: { type: String },
	site: { type: String },
	name: { type: String },
	teams: { type: String },
	date: { type: String },
	data: { type: String },
	is_over: { type: Boolean, default: false }
});

const game_model = await connect_to_db();

export const Game_Model = game_model?.model('Game', Game_Schema);
