import { SECRET_MONGODB_USERDB_CONNECTION } from '$env/static/private';
import mongoose from 'mongoose';

const database_URI = SECRET_MONGODB_USERDB_CONNECTION;

const connection_options = {
	maxIdleTimeMS: 60000,
	maxPoolSize: 300
};

/**
 * Connects to the MongoDB database using the provided connection URI.
 * @returns A Promise that resolves to a Mongoose Connection object.
 */
export async function connect_to_db() {
	try {
		if (!database_URI) throw new Error('No database URI provided.');
		return mongoose.connect(database_URI, connection_options);
	} catch (err) {
		console.log('Could not connect to the database.');
		console.log(err);
	}
}
