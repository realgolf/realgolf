/**
 * Represents a row in the FourWinning table.
 */
export type Row = {
	side: string;
	data: { id: string; value: string; color: string }[];
};

/**
 * Represents the game data for the FourWinning table.
 */
export type GameData = {
	color: string;
	data: string[];
};
