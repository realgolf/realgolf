/**
 * Represents a row in the data.
 */
export type Row = {
	/**
	 * The points associated with the row.
	 */
	points: string;
	/**
	 * The data values in the row.
	 */
	data: number[] | string[];
};

/**
 * Represents a team.
 */
export type Team = {
	/**
	 * The color of the team.
	 */
	color: string;
	/**
	 * The data values associated with the team.
	 */
	data: number[];
	/**
	 * The total points of the team.
	 */
	points: number;
};
