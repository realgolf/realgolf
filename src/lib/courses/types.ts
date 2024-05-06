export type GolfCourse = {
	id: number;
	name: string;
	location: string;
	par: number;
	rating: number;
	slope: number;
	holes: GolfHole[];
};

type GolfHole = {
	number: number;
	par: number;
	distance: number;
	hcp: number;
};
