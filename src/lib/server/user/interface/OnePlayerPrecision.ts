export interface OnePlayerPrecisionHighscore {
	daily: {
		value: number;
		lastUpdated: Date | null;
	};
	weekly: {
		value: number;
		lastUpdated: Date | null;
	};
	monthly: {
		value: number;
		lastUpdated: Date | null;
	};
	yearly: {
		value: number;
		lastUpdated: Date | null;
	};
	all_time: {
		value: number;
		lastUpdated: Date | null;
	};
}
