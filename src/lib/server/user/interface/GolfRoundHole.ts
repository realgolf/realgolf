export interface GolfRoundHole {
	holeNumber: number;
	strokes: number;
	putts: number;
	fairwaysHit?: boolean;
	greensInRegulation?: boolean;
	penaltyStrokes: number;
}
