import mongoose from 'mongoose';
import { connect_to_db } from './db';

/**
 * Represents the schema for a golf course in the database.
 */
const Course_Schema = new mongoose.Schema({
	id: { type: String, require: true, unique: true },
	name: { type: String, require: true, unique: true },
	location: { type: String, require: true },
	in_par: { type: Number, require: true },
	out_par: { type: Number, require: true },
	total_par: { type: Number, require: true },
	tees: [
		{
			color: { type: String, require: true },
			holes: [
				{
					number: { type: Number, require: true },
					par: { type: Number, require: true },
					distance: { type: Number, require: true },
					hcp: { type: Number, require: true }
				}
			],
			in_distance: { type: Number, require: true },
			out_distance: { type: Number, require: true },
			total_distance: { type: Number, require: true }
		}
	],
	rating: [
		{
			men: [
				{
					tee: { type: String },
					course: { type: Number },
					slope: { type: Number }
				}
			],
			ladies: [
				{
					tee: { type: String },
					course: { type: Number },
					slope: { type: Number }
				}
			]
		}
	]
});

const course_model = await connect_to_db();

/**
 * The Mongoose model for the Course collection.
 */
export const Course_Model = course_model?.model('Course', Course_Schema);
