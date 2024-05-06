/**
 * Represents a team in the game.
 */
export type Team = {
	color: string;
	data: string[];
};

/**
 * Represents a row in the game board.
 */
export type Row = {
	side: string;
	data: string[];
};

/**
 * Represents a winning combination of cells.
 */
export type winCombination = {
	cells: { outerIndex: number; innerIndex: number }[];
};
