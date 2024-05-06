export interface GolfRoundCourse {
	name: string;
	location?: string;
	coursePar: number;
	parInfo: { holeNumber: number; par: number }[];
	courseRating: number;
	slope: number;
}
