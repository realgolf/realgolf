import { User_Model } from './models';

// Variable to store the last execution time
let lastExecutionTime: Date | null = null;

export async function deleteOldUsersIfNeeded() {
	const currentTime = new Date();

	// Check if it has been more than 24 hours since the last execution
	if (
		!lastExecutionTime ||
		currentTime.getTime() - lastExecutionTime.getTime() > 24 * 60 * 60 * 1000
	) {
		// Update the last execution time
		lastExecutionTime = currentTime;

		// Execute the deleteOldUsers function
		await deleteOldUsers();
	}
}

export async function deleteOldUsers() {
	const one_year_ago = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);

	try {
		const result = await User_Model?.deleteMany({
			'user.last_login_date': { $lt: one_year_ago }
		});
		console.info(`Deleted ${result?.deletedCount} old Users`);
	} catch (err) {
		console.error('Could not delete old documents.');
		console.error(err);
	}
}
