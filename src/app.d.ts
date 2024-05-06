declare global {
	type user = {
		id: string;
		email: string;
		name: string;
		username: string;
	};
	type auth = {
		id: string;
	};
	type games = {
		id: string | null | undefined;
		date: string | null | undefined;
		name: string | null | undefined;
		teams: string | null | undefined;
		data: string | null | undefined;
		is_over: boolean | null | undefined;
	};
}

export {};
