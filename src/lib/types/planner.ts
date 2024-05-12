export type Stars = {
	count: number;
	list: [
		{
			username: string;
		}
	];
	username?: string;
};

export type Todo = {
	task: string;
	done: boolean;
	priority: number;
};
