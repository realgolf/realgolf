import type { Achievements } from './interface/Achievements';
import type { GolfRound } from './interface/GolfRound';
import type { HandicapHistory } from './interface/HandicapHistory';
import type { OnePlayerPrecisionHighscore } from './interface/OnePlayerPrecision';

export type User = {
	user: {
		email: string;
		password: string;
		name: string;
		username: string;
		registration_date: Date;
		last_login_date: Date;
		measurement_units: string;
		theme: string;
		handicap: number;
		handicap_updated: Date;
		bio?: string;
		role: string;
		badges?: { title: string; description: string; color: string }[];
		socials: string[];
		status: {
			emoji: string;
			text: string;
			busy: boolean;
		};
		followers: {
			count: number;
			list: {
				username: string;
			}[];
		};
		following: {
			count: number;
			list: {
				username: string;
			}[];
		};
	};
	achievements: Achievements[];
	games: {
		id: string;
		name: string;
		teams: string;
		date: string;
		data: string;
	}[];
	total_games: number;
	one_player_precision_highscore: OnePlayerPrecisionHighscore;
	one_player_precision_history: { value: number; lastUpdated: Date }[];
	golf_round: GolfRound[];
	handicap_history: HandicapHistory[];
};

export type Followers = {
	count: number;
	list: {
		username: string;
	}[];
};

export type Following = {
	count: number;
	list: {
		username: string;
	}[];
};

export type Status = {
	emoji: string;
	text: string;
	busy: boolean;
};
