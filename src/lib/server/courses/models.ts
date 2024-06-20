import mongoose from 'mongoose';

/**
 * Represents the schema for a golf course in the database.
 */
const Course_Schema = new mongoose.Schema({
	id: { type: String, require: true, unique: true },
	name: { type: String, require: true, unique: true },
	location: { type: String, require: true },
	geolocation: {
		latitude: { type: Number, require: true },
		longitude: { type: Number, require: true }
	},
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

/**
 * The Mongoose model for the Course collection.
 */
export const Course_Model = mongoose.model('Course', Course_Schema);
