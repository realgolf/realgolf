export type Course_Data = {
	courses: {
		id: string;
		name: string;
		location: string;
		total_par: number;
		tees: {
			color: string;
			holes: {
				number: number;
				par: number;
				distance: number;
				hcp: number;
			}[];
			total_distance: number;
		}[];
		rating: number;
		slope: number;
	}[];
};
