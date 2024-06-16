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
	pos: number;
	name: string;
	color: string;
	data: string[];
	points: number;
	shots: number;
};
