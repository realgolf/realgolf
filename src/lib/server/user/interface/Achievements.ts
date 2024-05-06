export interface Achievements {
	title: string;
	description: string;
	first_unlocked: Date;
	is_unlocked: {
		bronze_unlocked: boolean;
		silver_unlocked: boolean;
		gold_unlocked: boolean;
		platinum_unlocked: boolean;
	};
	history?: {
		first_unlocked_date?: Date;
		first_unlocked_game?: string;
		bronze_unlocked_date?: Date;
		bronze_unlocked_game?: string;
		silver_unlocked_date?: Date;
		silver_unlocked_game?: string;
		gold_unlocked_date?: Date;
		gold_unlocked_game?: string;
		platinum_unlocked_date?: Date;
		platinum_unlocked_game?: string;
	};
}
