/**
 * Represents an array of filtered games.
 * It contains an array of games.
 */
export type filteredGames = games[];

/**
 * Represents the data object.
 * It contains properties such as authentication token, email, an array of `games` objects,
 * measurement units, name, and theme.
 */
export type Data = {
	auth: string;
	email: string;
	games: games[];
	measurement_units: string;
	name: string;
	theme: string;
};
