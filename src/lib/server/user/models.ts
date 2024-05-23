import mongoose from 'mongoose';
import { connect_to_db } from './db';

/**
 * Defines the Mongoose schema for the User model.
 * @remarks
 * This schema represents the structure of the User document in the MongoDB database.
 * It includes fields such as user information, achievements, games, and statistics.
 */
const User_Schema = new mongoose.Schema({
	id: { type: String, require: true, unique: true },
	user: {
		email: { type: String, require: true, unique: true },
		password: { type: String, require: true },
		name: { type: String, require: true },
		username: { type: String, require: true, unique: true },
		registration_date: { type: Date, require: true },
		last_login_date: { type: Date, require: true },
		measurement_units: { type: String, required: true, default: 'meters' },
		theme: { type: String, required: true, default: 'system' },
		rounded_corners: { type: Boolean, required: true, default: true },
		animation: { type: Boolean, required: true, default: true },
		handicap: { type: Number, required: true, default: 54 },
		handicap_updated: { type: Date, required: true, default: new Date() },
		bio: { type: String },
		email_public: { type: Boolean, required: true, default: false },
		pronoun: { type: String },
		custom_pronoun: { type: String },
		badges: [
			{
				title: { type: String },
				color: { type: String }
			}
		],
		socials: { type: Array, default: [] },
		status: {
			emoji: { type: String },
			text: { type: String },
			busy: { type: Boolean }
		},
		followers: {
			count: { type: Number, default: 0 },
			list: [
				{
					username: { type: String }
				}
			]
		},
		following: {
			count: { type: Number, default: 0 },
			list: [
				{
					username: { type: String }
				}
			]
		}
	},
	achievements: [
		{
			title: { type: String },
			description: { type: String },
			first_unlocked: { type: Date },
			is_unlocked: {
				bronze_unlocked: { type: Boolean },
				silver_unlocked: { type: Boolean },
				gold_unlocked: { type: Boolean },
				platinum_unlocked: { type: Boolean }
			},
			history: {
				first_unlocked_date: { type: Date },
				first_unlocked_game: { type: String },
				bronze_unlocked_date: { type: Date },
				bronze_unlocked_game: { type: String },
				silver_unlocked_date: { type: Date },
				silver_unlocked_game: { type: String },
				gold_unlocked_date: { type: Date },
				gold_unlocked_game: { type: String },
				platinum_unlocked_date: { type: Date },
				platinum_unlocked_game: { type: String }
			}
		}
	],
	games: [
		{
			id: { type: String },
			name: { type: String },
			teams: { type: String },
			date: { type: String },
			data: { type: String },
			is_over: { type: Boolean, default: false }
		}
	],
	total_games: { type: Number, default: 0 },
	one_player_precision_highscore: {
		daily: {
			value: { type: Number, default: 0 },
			lastUpdated: { type: Date, default: null }
		},
		weekly: {
			value: { type: Number, default: 0 },
			lastUpdated: { type: Date, default: null }
		},
		monthly: {
			value: { type: Number, default: 0 },
			lastUpdated: { type: Date, default: null }
		},
		yearly: {
			value: { type: Number, default: 0 },
			lastUpdated: { type: Date, default: null }
		},
		all_time: {
			value: { type: Number, default: 0 },
			lastUpdated: { type: Date, default: null }
		}
	},
	one_player_precision_history: [
		{
			value: { type: Number, default: 0 },
			lastUpdated: { type: Date, default: null }
		}
	],
	golf_round: [
		{
			id: { type: String },
			course: {
				name: { type: String, required: true },
				location: { type: String },
				coursePar: { type: Number },
				parInfo: [{ holeNumber: Number, par: Number }],
				courseRating: { type: Number },
				slope: { type: Number }
			},
			roundInfo: {
				date: { type: Date, required: true },
				time: { type: String },
				weatherConditions: { type: String },
				playingPartners: [{ type: String }]
			},
			holeByHoleData: [
				{
					holeNumber: { type: Number, required: true },
					par: { type: Number, required: true },
					distance: { type: Number, required: true },
					hcp: { type: Number, required: true },
					strokes: { type: Number, required: true },
					putts: { type: Number, required: true },
					fairwaysHit: { type: Boolean },
					greensInRegulation: { type: Boolean },
					penaltyStrokes: { type: Number, default: 0 }
				}
			],
			overallStatistics: {
				totalStrokes: { type: Number },
				totalPutts: { type: Number },
				fairwaysHitPercentage: { type: String },
				greensInRegulationPercentage: { type: String }
			}
		}
	],
	handicap_history: [
		{
			handicap: { type: Number },
			date: { type: Date }
		}
	],
	planners: [
		{
			id: { type: String },
			title: { type: String },
			description: { type: String },
			dateOfCreation: { type: Date },
			dateOfLastEdit: { type: Date },
			due: { type: Date },
			comment: { type: String },
			visits: { type: Number, default: 0 },
			edits: { type: Number, default: 0 },
			stars: {
				count: { type: Number, default: 0 },
				list: [
					{
						username: { type: String }
					}
				]
			},
			done: { type: Boolean, default: false },
			todos: [
				{
					id: { type: String },
					task: { type: String },
					done: { type: Boolean, default: false },
					priority: { type: Number, default: 0 }
				}
			]
		}
	]
});

const user_model = await connect_to_db();

export const User_Model = user_model?.model('User', User_Schema);
